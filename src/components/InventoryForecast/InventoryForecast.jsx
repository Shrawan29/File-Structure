import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, BarChart, Bar } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, TrendingUp, ShoppingCart, Clock, Factory, Target, CircleDollarSign, UserSquare2, LineChart as ChartIcon, ArrowUpDown } from 'lucide-react';

const InventoryForecast = () => {
  // Sample data - replace with real data
  const forecastData = [
    { month: 'Jan', actual: 4000, forecast: 4400, inventory: 3000 },
    { month: 'Feb', actual: 4500, forecast: 4600, inventory: 3200 },
    { month: 'Mar', actual: 5100, forecast: 5000, inventory: 3400 },
    { month: 'Apr', actual: 4800, forecast: 5200, inventory: 3100 },
    { month: 'May', actual: 5300, forecast: 5400, inventory: 3300 },
    { month: 'Jun', actual: 5800, forecast: 5600, inventory: 3600 }
  ];

  const MetricCard = ({ icon: Icon, title, value, trend, description }) => (
    <Card className="relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-fuchsia-600/5 group-hover:from-purple-600/10 group-hover:to-fuchsia-600/10 transition-all duration-500"></div>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 rounded-lg p-3">
            <Icon className="w-6 h-6 text-purple-400" />
          </div>
          <span className={`text-sm ${trend >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {trend}%
          </span>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-medium text-zinc-200">{title}</h3>
          <p className="text-2xl font-bold text-white mt-2">{value}</p>
          <p className="text-sm text-zinc-400 mt-2">{description}</p>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen w-full bg-black p-8 pt-20">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/30 via-black to-black -z-10"></div>
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
          Inventory Forecast Dashboard
        </h1>
        <p className="text-zinc-400 mt-2">Real-time inventory analytics and predictions</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          icon={Package}
          title="Current Stock"
          value="12,543"
          trend={5.2}
          description="Total items in warehouse"
        />
        <MetricCard
          icon={TrendingUp}
          title="Forecast Accuracy"
          value="94.8%"
          trend={2.1}
          description="Last 30 days"
        />
        <MetricCard
          icon={ShoppingCart}
          title="Open Orders"
          value="843"
          trend={-1.8}
          description="Pending fulfillment"
        />
        <MetricCard
          icon={Clock}
          title="Avg Lead Time"
          value="4.2 days"
          trend={-0.5}
          description="Supplier delivery time"
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <Card className="lg:col-span-2 backdrop-blur-xl bg-black/40 border-white/10">
          <CardHeader>
            <CardTitle className="text-zinc-200">Inventory Forecast vs Actual</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={forecastData}>
                  <defs>
                    <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#9333ea" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#9333ea" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="month" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="forecast" 
                    stroke="#9333ea" 
                    fillOpacity={1} 
                    fill="url(#colorForecast)" 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="actual" 
                    stroke="#e879f9" 
                    strokeWidth={2} 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Side Panel */}
        <Card className="backdrop-blur-xl bg-black/40 border-white/10">
          <CardHeader>
            <CardTitle className="text-zinc-200">Key Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="inventory">
              <TabsList className="w-full bg-black/20">
                <TabsTrigger value="inventory" className="flex-1">Inventory</TabsTrigger>
                <TabsTrigger value="orders" className="flex-1">Orders</TabsTrigger>
                <TabsTrigger value="suppliers" className="flex-1">Suppliers</TabsTrigger>
              </TabsList>
              <TabsContent value="inventory" className="mt-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-zinc-400">Stock Level</span>
                    <span className="text-white">87%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-zinc-400">Reorder Points</span>
                    <span className="text-white">23 items</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-zinc-400">Stock Turnover</span>
                    <span className="text-white">4.2x</span>
                  </div>
                </div>
              </TabsContent>
              {/* Add content for other tabs as needed */}
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <Card className="backdrop-blur-xl bg-black/40 border-white/10">
          <CardHeader>
            <CardTitle className="text-zinc-200">Supplier Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={forecastData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="month" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip />
                  <Bar dataKey="inventory" fill="#9333ea" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-xl bg-black/40 border-white/10">
          <CardHeader>
            <CardTitle className="text-zinc-200">Return Rates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={forecastData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="month" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip />
                  <Line type="monotone" dataKey="actual" stroke="#e879f9" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-xl bg-black/40 border-white/10">
          <CardHeader>
            <CardTitle className="text-zinc-200">Marketing Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={forecastData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="month" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip />
                  <Line type="monotone" dataKey="forecast" stroke="#9333ea" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InventoryForecast;