import React, { useState, useMemo } from 'react';
import { Link, Links } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { Card } from "@/components/ui/card";
import { Calendar, TrendingUp, TrendingDown, Package, Target, ChevronDown, Filter, ArrowRight, Clock, DollarSign, Users, ShoppingCart, BarChart2, Map, Bell } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


export default function SalesTrends() {
  const [dateRange, setDateRange] = useState('This Month');
  const [selectedMetric, setSelectedMetric] = useState('revenue');
  const [selectedPeriod, setSelectedPeriod] = useState('weekly');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [showNotification, setShowNotification] = useState(true);

  // Enhanced sample data
  const salesData = [
    { date: 'Week 1', revenue: 4000, orders: 120, customers: 89, avgOrderValue: 33.33, newCustomers: 45, returningCustomers: 44, profit: 1200 },
    { date: 'Week 2', revenue: 3000, orders: 98, customers: 75, avgOrderValue: 30.61, newCustomers: 38, returningCustomers: 37, profit: 900 },
    { date: 'Week 3', revenue: 5000, orders: 145, customers: 110, avgOrderValue: 34.48, newCustomers: 58, returningCustomers: 52, profit: 1500 },
    { date: 'Week 4', revenue: 4500, orders: 134, customers: 95, avgOrderValue: 33.58, newCustomers: 48, returningCustomers: 47, profit: 1350 },
    { date: 'Week 5', revenue: 6000, orders: 168, customers: 128, avgOrderValue: 35.71, newCustomers: 65, returningCustomers: 63, profit: 1800 },
    { date: 'Week 6', revenue: 5500, orders: 156, customers: 118, avgOrderValue: 35.26, newCustomers: 60, returningCustomers: 58, profit: 1650 },
    { date: 'Week 7', revenue: 7000, orders: 189, customers: 142, avgOrderValue: 37.04, newCustomers: 72, returningCustomers: 70, profit: 2100 }
  ];

  const topProducts = [
    { name: 'Premium Headphones', sales: 1200, growth: 15, revenue: 48000, category: 'Electronics', stock: 450 },
    { name: 'Wireless Keyboard', sales: 950, growth: 8, revenue: 38000, category: 'Electronics', stock: 320 },
    { name: 'Smart Watch', sales: 850, growth: -5, revenue: 34000, category: 'Electronics', stock: 280 },
    { name: 'Laptop Stand', sales: 700, growth: 12, revenue: 28000, category: 'Accessories', stock: 560 },
    { name: 'Mouse', sales: 200, growth: 12, revenue: 2000, category: 'Accessories', stock: 560 }
  ];

  const regionalData = [
    { name: 'North America', value: 45, revenue: 21000 },
    { name: 'Europe', value: 30, revenue: 14000 },
    { name: 'Asia Pacific', value: 15, revenue: 7000 },
    { name: 'Rest of World', value: 10, revenue: 4700 }
  ];

  const summaryMetrics = [
    {
      title: "Total Revenue",
      value: "$47,892",
      change: "+12.5%",
      icon: <DollarSign className="w-5 h-5" />,
      trend: "up",
      metric: "vs last month",
      detail: "Profit margin: 32%"
    },
    {
      title: "Total Orders",
      value: "1,234",
      change: "+8.2%",
      icon: <ShoppingCart className="w-5 h-5" />,
      trend: "up",
      metric: "vs last month",
      detail: "Average items: 2.4"
    },
    {
      title: "Active Customers",
      value: "892",
      change: "+15.3%",
      icon: <Users className="w-5 h-5" />,
      trend: "up",
      metric: "vs last month",
      detail: "Retention: 68%"
    },
    {
      title: "Avg Order Value",
      value: "$38.75",
      change: "-2.1%",
      icon: <Target className="w-5 h-5" />,
      trend: "down",
      metric: "vs last month",
      detail: "Cart conversion: 28%"
    }
  ];

  const getMetricColor = (value) => {
    if (value > 10) return 'text-green-400';
    if (value > 0) return 'text-emerald-400';
    if (value === 0) return 'text-gray-400';
    if (value > -10) return 'text-orange-400';
    return 'text-red-400';
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className=" bg-black/80 border border-white/10 rounded-lg p-4">
          <p className="text-white font-medium mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm text-gray-300">
              {entry.name}: {typeof entry.value === 'number' ?
                entry.name.toLowerCase().includes('revenue') || entry.name.toLowerCase().includes('profit')
                  ? `$${entry.value.toLocaleString()}`
                  : entry.value.toLocaleString()
                : entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden p-6 pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/30 via-black to-black" />

      <div className="relative max-w-7xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Sales Analytics Dashboard
            </h1>
            <p className="text-zinc-400 mt-1">Comprehensive view of your business metrics</p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Select defaultValue={dateRange} onValueChange={setDateRange}>
              <SelectTrigger className="w-40 bg-black/80 backdrop-blur-sm border-white/10 text-white">
                <Calendar className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent className="text-white backdrop-blur-sm bg-black/80 text-center border-white/10">
                <SelectItem value="Today">Today</SelectItem>
                <SelectItem value="This Week">This Week</SelectItem>
                <SelectItem value="This Month">This Month</SelectItem>
                <SelectItem value="This Quarter">This Quarter</SelectItem>
                <SelectItem value="This Year">This Year</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex gap-2">
              <Select defaultValue={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="w-32 bg-black/40 border-white/10 text-white">
                  <Map className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Region" />
                </SelectTrigger>
                <SelectContent className="text-white backdrop-blur-sm bg-black/80 text-center border-white/10">
                  <SelectItem value="all">All Regions</SelectItem>
                  <SelectItem value="na">North America</SelectItem>
                  <SelectItem value="eu">Europe</SelectItem>
                  <SelectItem value="ap">Asia Pacific</SelectItem>
                  <SelectItem value="row">Rest of World</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Summary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {summaryMetrics.map((metric, index) => (
            <Card key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-fuchsia-600/50 rounded-xl blur-sm opacity-20 group-hover:opacity-30 transition duration-500" />
              <div className="relative backdrop-blur-xl bg-black/40 rounded-xl border border-white/10 p-6 transition-all duration-500 group-hover:bg-black/50">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-zinc-400 text-sm">{metric.title}</div>
                  <div className={`p-2 rounded-lg  ${metric.trend === 'up' ? 'bg-green-500' : 'bg-red-500'
                    }`}>
                    {metric.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-2">{metric.value}</div>
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                    }`}>
                    {metric.change}
                  </span>
                  <span className="text-xs text-zinc-500">{metric.metric}</span>
                </div>
                <div className="mt-2 text-xs text-zinc-400">{metric.detail}</div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Chart */}
          <Card className="relative group lg:col-span-2">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-fuchsia-600/50 rounded-xl blur-sm opacity-20 group-hover:opacity-30 transition duration-500" />
            <div className="relative backdrop-blur-xl bg-black/40  border p-6 transition-all duration-500 ">
              <h3 className="text-lg font-medium text-white mb-4">Sales Trends</h3>
              <div className="h-96 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="date" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey={selectedMetric}
                      stroke="#9333EA"
                      strokeWidth={2}
                      dot={{ fill: '#9333EA' }}
                      activeDot={{ r: 6, fill: '#A855F7' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Card>

          {/* Top Products */}
          <Card className="relative group" >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-fuchsia-600/50 rounded-xl blur-sm opacity-20 group-hover:opacity-30 transition duration-500" />
            <div className="relative backdrop-blur-xl bg-black/40 rounded-xl border border-white/10 p-6 transition-all duration-500 group-hover:bg-black/50">
              <h3 className="text-lg font-medium text-white mb-4">Top Products</h3>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <Link to="/Product" >
                  <div  key={index} className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <div>
                      <div className="font-medium text-white">{product.name}</div>
                      <div className="text-sm text-zinc-400">{product.category}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-white">${product.revenue.toLocaleString()}</div>
                      <div className={`text-sm ${getMetricColor(product.growth)}`}>
                        {product.growth > 0 ? '+' : ''}{product.growth}%
                      </div>
                    </div>
                  </div>
                  </Link>
                ))}
              </div>
            </div>
          </Card>

          {/* Regional Performance */}
          <Card className="relative group lg:col-span-3">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-fuchsia-600/50 rounded-xl blur-sm opacity-20 group-hover:opacity-30 transition duration-500" />
            <div className="relative backdrop-blur-xl bg-black/40  border  p-6 transition-all duration-500 group-hover:bg-black/50">
              <h3 className="text-lg font-medium text-white mb-4">Regional Performance</h3>
              <div className="h-72">
                <ResponsiveContainer className="" width="100%" height="100%">
                  <BarChart data={regionalData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="name" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar
                      dataKey="revenue"
                      fill="#9333EA"
                      className="hover:fill-[#A855F7] transition-all duration-300"
                    />



                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}