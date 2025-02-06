import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, ShoppingBag, Calendar, AlertTriangle, Users, Award } from 'lucide-react';

const MarketInsightsDashboard = () => {
  const marketTrendsData = [
    { month: 'Jan', consumerSentiment: 82, industryGrowth: 2.4, marketShare: 15.2, onlineTraffic: 45.3, salesVolume: 1250, roi: 12.5, engagement: 78 },
    { month: 'Feb', consumerSentiment: 85, industryGrowth: 2.6, marketShare: 15.8, onlineTraffic: 47.8, salesVolume: 1380, roi: 13.2, engagement: 82 },
    { month: 'Mar', consumerSentiment: 88, industryGrowth: 2.8, marketShare: 16.1, onlineTraffic: 50.2, salesVolume: 1420, roi: 14.1, engagement: 85 },
    { month: 'Apr', consumerSentiment: 86, industryGrowth: 2.7, marketShare: 16.5, onlineTraffic: 48.9, salesVolume: 1390, roi: 13.8, engagement: 83 },
    { month: 'May', consumerSentiment: 89, industryGrowth: 3.0, marketShare: 16.8, onlineTraffic: 52.1, salesVolume: 1460, roi: 14.5, engagement: 87 },
    { month: 'Jun', consumerSentiment: 91, industryGrowth: 3.2, marketShare: 17.2, onlineTraffic: 54.5, salesVolume: 1520, roi: 15.0, engagement: 89 },
    { month: 'Jul', consumerSentiment: 93, industryGrowth: 3.4, marketShare: 17.5, onlineTraffic: 56.2, salesVolume: 1580, roi: 15.3, engagement: 91 },
    { month: 'Aug', consumerSentiment: 92, industryGrowth: 3.3, marketShare: 17.8, onlineTraffic: 55.8, salesVolume: 1550, roi: 15.1, engagement: 90 }
  ];

  const competitorData = [
    { id: 1, product: 'Our Product', price: '$99.99', salesRank: 1, rating: 4.8, change: '+5%', marketShare: '28%', customerSatisfaction: '92%', stockAvailability: '98%', reviewCount: 2458, socialMentions: 15420, brandStrength: 94 },
    { id: 2, product: 'Competitor A', price: '$89.99', salesRank: 2, rating: 4.5, change: '-2%', marketShare: '24%', customerSatisfaction: '88%', stockAvailability: '95%', reviewCount: 2145, socialMentions: 12350, brandStrength: 88 },
    { id: 3, product: 'Competitor B', price: '$109.99', salesRank: 3, rating: 4.3, change: '+3%', marketShare: '21%', customerSatisfaction: '85%', stockAvailability: '92%', reviewCount: 1875, socialMentions: 10280, brandStrength: 82 },
    { id: 4, product: 'Competitor C', price: '$79.99', salesRank: 4, rating: 4.2, change: '+1%', marketShare: '18%', customerSatisfaction: '83%', stockAvailability: '90%', reviewCount: 1560, socialMentions: 8940, brandStrength: 78 }
  ];

  const seasonalityData = [
    { month: 'Jan', demand: 65, event: 'New Year Sales', averageOrderValue: 85, promotionalImpact: 'High', yearOverYear: '+12%', conversion: 3.2, customerAcquisition: 2840, notes: 'Post-holiday clearance drives sales' },
    { month: 'Feb', demand: 45, event: 'Valentine\'s Day', averageOrderValue: 95, promotionalImpact: 'Medium', yearOverYear: '+8%', conversion: 2.8, customerAcquisition: 2240, notes: 'Gift-oriented purchases peak' },
    { month: 'Mar', demand: 55, event: 'Spring Collection', averageOrderValue: 90, promotionalImpact: 'High', yearOverYear: '+15%', conversion: 3.5, customerAcquisition: 3120, notes: 'New collection launch impact' },
    { month: 'Apr', demand: 50, event: 'Easter Sale', averageOrderValue: 88, promotionalImpact: 'Medium', yearOverYear: '+10%', conversion: 3.0, customerAcquisition: 2680, notes: 'Holiday shopping boost' },
    { month: 'May', demand: 70, event: 'Spring Clearance', averageOrderValue: 92, promotionalImpact: 'High', yearOverYear: '+14%', conversion: 3.8, customerAcquisition: 3000, notes: 'End of season clearance drives sales' },
    { month: 'Jun', demand: 80, event: 'Summer Kickoff', averageOrderValue: 100, promotionalImpact: 'High', yearOverYear: '+20%', conversion: 4.0, customerAcquisition: 3500, notes: 'Summer promotions attract new customers' },
    { month: 'Jul', demand: 75, event: 'Mid-Summer Sale', averageOrderValue: 85, promotionalImpact: 'Medium', yearOverYear: '+10%', conversion: 3.5, customerAcquisition: 2900, notes: 'Mid-summer discounts boost sales' },
    { month: 'Aug', demand: 60, event: 'Back to School', averageOrderValue: 90, promotionalImpact: 'High', yearOverYear: '+15%', conversion: 3.0, customerAcquisition: 3200, notes: 'Back to school shopping increases demand' },
    { month: 'Sep', demand: 50, event: 'Fall Collection Launch', averageOrderValue: 95, promotionalImpact: 'Medium', yearOverYear: '+5%', conversion: 2.5, customerAcquisition: 2400, notes: 'New fall products attract attention' },
    { month: 'Oct', demand: 55, event: 'Halloween Promotions', averageOrderValue: 80, promotionalImpact: 'Medium', yearOverYear: '+8%', conversion: 2.8, customerAcquisition: 2600, notes: 'Halloween-themed products drive sales' },
    { month: 'Nov', demand: 90, event: 'Black Friday Sales', averageOrderValue: 110, promotionalImpact: 'High', yearOverYear: '+25%', conversion: 5.0, customerAcquisition: 4000, notes: 'Major sales event attracts large crowds' },
    { month: 'Dec', demand: 95, event: 'Holiday Season', averageOrderValue: 120, promotionalImpact: 'High', yearOverYear: '+30%', conversion: 6.0, customerAcquisition: 5000, notes: 'Peak shopping season for gifts and promotions' }
  ];


  const marketRisks = [
    { risk: 'Supply Chain Disruption', probability: 'Medium', impact: 'High', mitigation: 'Diversified supplier base', timeframe: 'Q3 2025', status: 'Monitored', trend: 'Stable' },
    { risk: 'New Competitor Entry', probability: 'High', impact: 'Medium', mitigation: 'Strong brand differentiation', timeframe: 'Q2 2025', status: 'Active', trend: 'Increasing' },
    { risk: 'Price Volatility', probability: 'Medium', impact: 'Medium', mitigation: 'Dynamic pricing strategy', timeframe: 'Q4 2025', status: 'Managed', trend: 'Decreasing' },
    { risk: 'Regulatory Changes', probability: 'Low', impact: 'High', mitigation: 'Compliance monitoring', timeframe: 'Q1 2026', status: 'Planned', trend: 'Stable' }
  ];

  const customerSegments = [
    { name: 'Young Professionals', value: 35, growth: '+8%', ltv: '$850', engagementScore: 8.5 },
    { name: 'Families', value: 30, growth: '+5%', ltv: '$1200', engagementScore: 7.8 },
    { name: 'Students', value: 20, growth: '+12%', ltv: '$400', engagementScore: 8.2 },
    { name: 'Seniors', value: 15, growth: '+3%', ltv: '$650', engagementScore: 7.5 }
  ];

  const kpiMetrics = [
    { metric: 'Revenue Growth', value: '+15.8%', trend: 'up', target: '20%', icon: TrendingUp },
    { metric: 'Market Share', value: '28.5%', trend: 'up', target: '30%', icon: PieChart },
    { metric: 'Customer Retention', value: '85.2%', trend: 'stable', target: '90%', icon: Users },
    { metric: 'Brand Health Score', value: '8.7/10', trend: 'up', target: '9.0/10', icon: Award }
  ];

  const COLORS = ['#9333ea', '#c084fc', '#e879f9', '#f0abfc'];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = seasonalityData.find(item => item.month === label);
      return (
        <div className="bg-black/90 border border-purple-500/20 p-4 rounded-lg shadow-lg">
          <p className="text-white font-medium">{label}</p>
          <p className="text-purple-400">Demand: {payload[0].value}%</p>
          <p className="text-zinc-400 text-sm">Event: {data?.event}</p>
          <p className="text-zinc-400 text-sm">Avg Order Value: ${data?.averageOrderValue}</p>
          <p className="text-zinc-400 text-sm">YoY Growth: {data?.yearOverYear}</p>
          <p className="text-zinc-400 text-sm mt-2">{data?.notes}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen w-full bg-black p-8 pt-20">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/30 via-black to-black -z-10"></div>
      
      {/* Header section */}
      <div className="mb-8">
        <h1 className="text-4xl pb-3 font-bold bg-gradient-to-r from-white via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
          Market Insights Dashboard
        </h1>
        <p className="text-zinc-400 mt-2 text-lg">Comprehensive market analysis and competitive intelligence</p>
        
        {/* KPI Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          {kpiMetrics.map((kpi, index) => (
            <Card key={index} className="backdrop-blur-xl bg-black/40 border-white/10 hover:bg-white/5 transition-all">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2">
                  <kpi.icon className="w-5 h-5 text-purple-400" />
                  <div className="text-zinc-400 text-sm">{kpi.metric}</div>
                </div>
                <div className="flex items-end gap-2 mt-2">
                  <div className="text-2xl font-bold text-white">{kpi.value}</div>
                  <div className={`text-sm ${kpi.trend === 'up' ? 'text-green-400' : kpi.trend === 'down' ? 'text-red-400' : 'text-yellow-400'}`}>
                    Target: {kpi.target}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Market Trends */}
        <Card className="lg:col-span-2 backdrop-blur-xl bg-black/40 border-white/10">
          <CardHeader>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-purple-400" />
              <CardTitle className="text-zinc-200 ">Market Trends Analysis</CardTitle>
            </div>
            <CardDescription className="text-zinc-400">
              Comprehensive view of market indicators and growth metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="sentiment" className="space-y-4">
              <TabsList className="w-full ">
                <TabsTrigger value="sentiment">Consumer Sentiment</TabsTrigger>
                <TabsTrigger value="growth">Growth Metrics</TabsTrigger>
                <TabsTrigger value="traffic">Online Traffic</TabsTrigger>
              </TabsList>
              
              <TabsContent value="sentiment" className="h-[500px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={marketTrendsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="month" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip contentStyle={{ backgroundColor: '#292929', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px' }} />
                    <Legend />
                    <Line type="monotone" dataKey="consumerSentiment" stroke="#9333ea" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6, strokeWidth: 2 }} />
                    <Line type="monotone" dataKey="engagement" stroke="#c084fc" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6, strokeWidth: 2 }} />
                  </LineChart>
                </ResponsiveContainer>
              </TabsContent>

              <TabsContent value="growth" className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={marketTrendsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="month" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip contentStyle={{ backgroundColor: '#c7c7c7', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px' }} />
                    <Legend />
                    <Area type="monotone" dataKey="industryGrowth" stackId="1" stroke="#9333ea" fill="#9333ea" fillOpacity={0.3} />
                    <Area type="monotone" dataKey="marketShare" stackId="1" stroke="#c084fc" fill="#c084fc" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </TabsContent>

              <TabsContent value="traffic" className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={marketTrendsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="month" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip contentStyle={{ backgroundColor: '#c7c7c7', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px' }} />
                    <Legend />
                    <Line type="monotone" dataKey="onlineTraffic" stroke="#9333ea" strokeWidth={2} dot={{ r: 4 }} />
                    <Line type="monotone" dataKey="salesVolume" stroke="#c084fc" strokeWidth={2} dot={{ r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Customer Segments */}
        <Card className="backdrop-blur-xl bg-black/40 border-white/10">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-400" />
              <CardTitle className="text-zinc-200">Customer Segments</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={customerSegments} innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value">
                    {customerSegments.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: '#c7c7c7', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px' }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {customerSegments.map((segment, index) => (
                  <div key={index} className="bg-white/5 p-3 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                        <span className="text-zinc-300">{segment.name}</span>
                      </div>
                      <span className="text-purple-400">{segment.value}%</span>
                    </div>
                    <div className="mt-2 flex justify-between text-sm">
                      <span className="text-zinc-400">Growth: {segment.growth}</span>
                      <span className="text-zinc-400">LTV: {segment.ltv}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Competitive Analysis */}
      <Card className="backdrop-blur-xl bg-black/40 border-white/10 mb-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-purple-400" />
              <CardTitle className="text-zinc-200">Competitive Analysis</CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-white/5">
                  <TableHead className="text-zinc-400">Product</TableHead>
                  <TableHead className="text-zinc-400">Price</TableHead>
                  <TableHead className="text-zinc-400">Market Share</TableHead>
                  <TableHead className="text-zinc-400">Rating</TableHead>
                  <TableHead className="text-zinc-400">Customer Satisfaction</TableHead>
                  <TableHead className="text-zinc-400">Stock Availability</TableHead>
                  <TableHead className="text-zinc-400">Brand Strength</TableHead>
                  <TableHead className="text-zinc-400">Change</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {competitorData.map((item) => (
                  <TableRow key={item.id} className="hover:bg-white/5">
                    <TableCell className="font-medium text-white">{item.product}</TableCell>
                    <TableCell className="text-zinc-300">{item.price}</TableCell>
                    <TableCell className="text-zinc-300">{item.marketShare}</TableCell>
                    <TableCell>
                      <span className="text-purple-400">{item.rating}</span>
                    </TableCell>
                    <TableCell className="text-zinc-300">{item.customerSatisfaction}</TableCell>
                    <TableCell className="text-zinc-300">{item.stockAvailability}</TableCell>
                    <TableCell>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-purple-400 h-2 rounded-full" style={{ width: `${item.brandStrength}%` }}></div>
                      </div>
                    </TableCell>
                    <TableCell className={item.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}>
                      {item.change}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Market Risks Analysis */}
      <Card className="backdrop-blur-xl bg-black/40 border-white/10 mb-6">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-purple-400" />
            <CardTitle className="text-zinc-200">Market Risks Analysis</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="text-left">
                <TableHead className="text-zinc-400">Risk Factor</TableHead>
                <TableHead className="text-zinc-400">Probability</TableHead>
                <TableHead className="text-zinc-400">Impact</TableHead>
                <TableHead className="text-zinc-400">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {marketRisks.map((risk, index) => (
                <TableRow key={index} className="hover:bg-white/5 text-left">
                  <TableCell className="font-medium text-white">{risk.risk}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      risk.probability === 'High' ? 'bg-red-500/20 text-red-400' :
                      risk.probability === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {risk.probability}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      risk.impact === 'High' ? 'bg-red-500/20 text-red-400' :
                      risk.impact === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {risk.impact}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${
                        risk.trend === 'Increasing' ? 'bg-red-400' :
                        risk.trend === 'Decreasing' ? 'bg-green-400' :
                        'bg-yellow-400'
                      }`}></span>
                      <span className="text-zinc-400">{risk.status}</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Seasonality Insights */}
      <Card className="backdrop-blur-xl bg-black/40 border-white/10 mb-6">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-purple-400" />
            <CardTitle className="text-zinc-200">Seasonality Insights</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="demand">
            <TabsList className="w-full bg-black/20 mb-4">
              <TabsTrigger value="demand">Demand Trends</TabsTrigger>
              <TabsTrigger value="orders">Order Value</TabsTrigger>
            </TabsList>
            
            <TabsContent value="demand">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={seasonalityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="month" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="demand" fill="#9333ea" radius={[4, 4, 0, 0]}>
                      {seasonalityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.promotionalImpact === 'High' ? '#9333ea' : entry.promotionalImpact === 'Medium' ? '#c084fc' : '#e879f9'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              
            </TabsContent>

            <TabsContent value="orders">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={seasonalityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="month" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px' }} />
                    <Line type="monotone" dataKey="averageOrderValue" stroke="#9333ea" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketInsightsDashboard;