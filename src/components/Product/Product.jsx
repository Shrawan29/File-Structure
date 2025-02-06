import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { BarChart, LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {
    TrendingUp,
    Package,
    DollarSign,
    Users,
    ArrowUp,
    ArrowDown,
    ShoppingCart,
    Repeat,
    AlertTriangle,
    Calendar,
    Filter
} from 'lucide-react';

export default function ProductAnalytics() {
    const [scrollY, setScrollY] = useState(0);
    const [timeRange, setTimeRange] = useState('30d');

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Sample data
    const revenueData = [
        { month: 'Jan', revenue: 45000, orders: 123, returns: 4 },
        { month: 'Feb', revenue: 52000, orders: 145, returns: 6 },
        { month: 'Mar', revenue: 49000, orders: 132, returns: 5 },
        { month: 'Apr', revenue: 58000, orders: 156, returns: 7 },
        { month: 'May', revenue: 63000, orders: 168, returns: 8 },
        { month: 'Jun', revenue: 68000, orders: 180, returns: 6 }
    ];

    const metrics = [
        {
            title: "Revenue",
            value: "$68,429",
            change: "+12.5%",
            isPositive: true,
            icon: <DollarSign className="w-6 h-6" />
        },
        {
            title: "Units Sold",
            value: "1,234",
            change: "+8.2%",
            isPositive: true,
            icon: <ShoppingCart className="w-6 h-6" />
        },
        {
            title: "Return Rate",
            value: "3.8%",
            change: "-2.4%",
            isPositive: true,
            icon: <Repeat className="w-6 h-6" />
        },
        {
            title: "Stock Level",
            value: "856",
            change: "-142",
            isPositive: false,
            icon: <Package className="w-6 h-6" />
        }
    ];

    return (
        <div className="min-h-screen w-full bg-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/30 via-black to-black"></div>

            {/* Animated Accent Light */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-br from-purple-400/20 rounded-full blur-3xl animate-pulse"></div>

            {/* Parallax Stars */}
            <div
                className="absolute inset-0 opacity-50"
                style={{
                    transform: `translateY(${scrollY * 0.2}px)`,
                    backgroundImage: `radial-gradient(2px 2px at ${Math.random() * 100}% ${Math.random() * 100}%, white, transparent)`
                }}
            ></div>

            <div className="relative max-w-7xl mx-auto px-4 py-8 pt-20">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                            Product Analytics
                        </h1>
                        <p className="text-zinc-400 mt-2">Premium Wireless Headphones X1</p>
                    </div>

                    <div className="flex gap-4">
                        <Button className="bg-white/10 text-white rounded-full hover:bg-white/15">
                            <Calendar className="w-4 h-4 mr-2" />
                            {timeRange}
                        </Button>
                        <Button className="bg-white/10 text-white rounded-full hover:bg-white/15">
                            <Filter className="w-4 h-4 mr-2" />
                            Filters
                        </Button>
                    </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {metrics.map((metric, i) => (
                        <div key={i} className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                            <div className="relative backdrop-blur-xl bg-black/40 rounded-xl border border-white/10 p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="bg-purple-300/50  rounded-lg p-3">
                                        {metric.icon}
                                    </div>
                                    <span className={`flex items-center text-sm ${metric.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                                        {metric.isPositive ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
                                        {metric.change}
                                    </span>
                                </div>
                                <h3 className="text-zinc-400 text-sm mb-1">{metric.title}</h3>
                                <p className="text-2xl font-bold text-white">{metric.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Revenue Chart */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                        <div className="relative backdrop-blur-xl bg-black/40 rounded-2xl border border-white/10 p-6 h-[400px]">
                            <h3 className="text-xl font-bold text-white mb-6">Revenue Trend</h3>
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={revenueData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                                    <XAxis dataKey="month" stroke="#666" />
                                    <YAxis stroke="#666" />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: '#000',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '8px'
                                        }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="revenue"
                                        stroke="#a855f7"
                                        strokeWidth={2}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Orders Chart */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                        <div className="relative backdrop-blur-xl bg-black/40 rounded-2xl border border-white/10 p-6 h-[400px]">
                            <h3 className="text-xl font-bold text-white mb-6">Orders vs Returns</h3>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={revenueData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                                    <XAxis dataKey="month" stroke="#666" />
                                    <YAxis stroke="#666" />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: '#000',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '8px'
                                        }}
                                    />
                                    <Bar dataKey="orders" fill="#a855f7" />
                                    <Bar dataKey="returns" fill="#ef4444" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Product Details */}
                <div className="relative group mb-8">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                    <div className="relative backdrop-blur-xl bg-black/40 rounded-2xl border border-white/10 p-8">
                        <h3 className="text-xl font-bold text-white mb-6">Inventory Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div>
                                <h4 className="text-zinc-400 mb-2">Stock Status</h4>
                                <div className="flex items-center gap-4">
                                    <div className="bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 rounded-lg p-3">
                                        <Package className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-white">856 units</p>
                                        <p className="text-sm text-zinc-400">In Stock</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-zinc-400 mb-2">Reorder Point</h4>
                                <div className="flex items-center gap-4">
                                    <div className="bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 rounded-lg p-3">
                                        <AlertTriangle className="w-6 h-6 text-yellow-400" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-white">500 units</p>
                                        <p className="text-sm text-zinc-400">Minimum Stock</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-zinc-400 mb-2">Lead Time</h4>
                                <div className="flex items-center gap-4">
                                    <div className="bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 rounded-lg p-3">
                                        <Calendar className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-white">15 days</p>
                                        <p className="text-sm text-zinc-400">Average</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}