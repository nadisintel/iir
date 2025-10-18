import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Checkbox } from './ui/checkbox';
import {
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Calendar,
  Download,
  ArrowRight,
  Target,
  Zap,
  DollarSign,
  BarChart3,
  LogOut,
  Sparkles,
  Activity,
} from 'lucide-react';
import { ScoreResult, AssessmentResponse } from '../types/assessment';
import { getMaturityDescription } from '../utils/scoring';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  Area,
  AreaChart,
} from 'recharts';
import { AIOperatingModelCanvas } from './AIOperatingModelCanvas';

interface ResultsDashboardProps {
  score: ScoreResult;
  responses: AssessmentResponse;
  onRestart: () => void;
  onLogout: () => void;
}

export function ResultsDashboard({ score, responses, onRestart, onLogout }: ResultsDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [checkedRecommendations, setCheckedRecommendations] = useState<Set<number>>(new Set());

  const toggleRecommendation = (index: number) => {
    const newChecked = new Set(checkedRecommendations);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedRecommendations(newChecked);
  };

  const radarData = [
    { subject: 'Cognitive', score: score.cognitiveScore, fullMark: 100 },
    { subject: 'Operational', score: score.operationalScore, fullMark: 100 },
    { subject: 'Strategic', score: score.strategicScore, fullMark: 100 },
    { subject: 'Living Systems', score: score.livingSystemsScore, fullMark: 100 },
  ];

  const barData = [
    { 
      name: 'Cognitive', 
      score: score.cognitiveScore,
      benchmark: 65,
      color: '#9333ea' 
    },
    { 
      name: 'Operational', 
      score: score.operationalScore,
      benchmark: 62,
      color: '#3b82f6' 
    },
    { 
      name: 'Strategic', 
      score: score.strategicScore,
      benchmark: 58,
      color: '#083D3A' 
    },
    { 
      name: 'Living Systems', 
      score: score.livingSystemsScore,
      benchmark: 55,
      color: '#9caf88' 
    },
  ];

  const trendData = [
    { month: 'Jan', score: 45 },
    { month: 'Feb', score: 48 },
    { month: 'Mar', score: 52 },
    { month: 'Apr', score: 58 },
    { month: 'May', score: 65 },
    { month: 'Jun', score: score.totalScore },
  ];

  const getRecommendations = () => {
    const recommendations = [];

    if (score.cognitiveScore < 60) {
      recommendations.push({
        title: 'Enhance Decision Intelligence',
        description:
          'Implement AI-powered dashboards for real-time insights and reduce decision latency.',
        priority: 'high',
        impact: '$50K+ annual savings',
        timeline: 'Week 1-4',
      });
    }

    if (score.operationalScore < 60) {
      recommendations.push({
        title: 'Optimize Workflow Integration',
        description: 'Consolidate tools and create seamless data flows between AI systems.',
        priority: 'high',
        impact: '20+ hrs/week saved',
        timeline: 'Week 2-6',
      });
    }

    if (score.strategicScore < 60) {
      recommendations.push({
        title: 'Align AI Strategy',
        description:
          'Develop clear AI strategy roadmap aligned with business objectives and ROI targets.',
        priority: 'medium',
        impact: '15% ROI improvement',
        timeline: 'Week 5-8',
      });
    }

    if (score.livingSystemsScore < 60) {
      recommendations.push({
        title: 'Build Adaptive Capabilities',
        description:
          'Implement learning systems and feedback loops for continuous infrastructure improvement.',
        priority: 'medium',
        impact: 'Future-proof infrastructure',
        timeline: 'Week 7-12',
      });
    }

    // Add positive reinforcements
    if (score.cognitiveScore >= 70) {
      recommendations.push({
        title: 'Expand Decision Intelligence',
        description:
          'Leverage your strong cognitive foundation to implement predictive analytics.',
        priority: 'low',
        impact: 'Competitive advantage',
        timeline: 'Month 4-6',
      });
    }

    if (score.operationalScore >= 70) {
      recommendations.push({
        title: 'Advanced Automation',
        description:
          'Build on operational excellence with intelligent process automation and orchestration.',
        priority: 'low',
        impact: 'Scale efficiency',
        timeline: 'Month 4-6',
      });
    }

    return recommendations;
  };

  const getRoadmap = () => {
    return [
      {
        phase: 'Days 1-30',
        title: 'Foundation & Quick Wins',
        icon: Zap,
        color: 'var(--caribbean)',
        items: [
          'Audit current AI tool inventory and usage',
          'Identify immediate consolidation opportunities',
          'Implement quick-win integrations',
          'Establish baseline metrics and KPIs',
        ],
      },
      {
        phase: 'Days 31-60',
        title: 'Integration & Optimization',
        icon: Target,
        color: 'var(--sage)',
        items: [
          'Deploy core integration architecture',
          'Optimize workflows across key systems',
          'Train teams on best practices',
          'Measure early ROI indicators',
        ],
      },
      {
        phase: 'Days 61-90',
        title: 'Scaling & Innovation',
        icon: TrendingUp,
        color: 'var(--gold)',
        items: [
          'Activate advanced AI capabilities',
          'Scale successful patterns organization-wide',
          'Establish continuous improvement cycles',
          'Prepare for next phase transformation',
        ],
      },
    ];
  };

  const recommendations = getRecommendations();
  const roadmap = getRoadmap();

  return (
    <div className="min-h-screen bg-[var(--alabaster)]">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-[var(--gray-200)] sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--caribbean)] to-[var(--sage)] rounded-lg flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl text-[var(--licorice)]">InfraIQ™ Platform</h1>
                <p className="text-sm text-[var(--gray-600)]">{responses.organizationContext.companyName}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="border-[var(--gray-200)] text-[var(--gray-600)]"
              >
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
              <Button
                variant="ghost"
                onClick={onLogout}
                className="text-[var(--gray-600)]"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 max-w-7xl">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-[var(--caribbean)] to-[var(--sage)] text-white rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl mb-2">Welcome to Your Intelligence Infrastructure Dashboard</h2>
              <p className="text-lg opacity-90">
                Your comprehensive diagnostic results and 90-day transformation roadmap
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-75 mb-1">Assessment completed</p>
              <p className="text-lg">{new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-2 border-[var(--caribbean)] bg-gradient-to-br from-white to-[var(--caribbean)] to-opacity-5">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-[var(--gray-600)] flex items-center gap-2">
                <Activity className="h-4 w-4" />
                Overall Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl text-[var(--caribbean)] mb-2">{score.totalScore}</div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{score.maturityEmoji}</span>
                <span className="text-sm text-[var(--licorice)]">{score.maturityLabel}</span>
              </div>
              <p className="text-xs text-[var(--gray-600)]">{getMaturityDescription(score.maturityLevel)}</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-[var(--gray-600)] flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-orange-600" />
                Infrastructure Waste
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-orange-600 mb-1">
                ${score.wasteEstimate.toLocaleString()}
              </div>
              <p className="text-xs text-[var(--gray-600)]">Estimated annual waste from fragmented systems</p>
              <div className="mt-3 h-2 bg-[var(--gray-100)] rounded-full overflow-hidden">
                <div className="h-full bg-orange-600" style={{ width: '68%' }} />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-[var(--sage)]">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-[var(--gray-600)] flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-[var(--sage)]" />
                Cost Optimization
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-[var(--sage)] mb-1">
                ${score.costOptimizationPotential.toLocaleString()}
              </div>
              <p className="text-xs text-[var(--gray-600)]">Potential annual savings opportunity</p>
              <div className="mt-3 h-2 bg-[var(--gray-100)] rounded-full overflow-hidden">
                <div className="h-full bg-[var(--sage)]" style={{ width: '85%' }} />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-[var(--gold)]">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-[var(--gray-600)] flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-[var(--gold)]" />
                ROI Projection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-[var(--gold)] mb-1">
                ${score.roiProjection.toLocaleString()}
              </div>
              <p className="text-xs text-[var(--gray-600)]">Projected 12-month value from optimization</p>
              <div className="mt-3 h-2 bg-[var(--gray-100)] rounded-full overflow-hidden">
                <div className="h-full bg-[var(--gold)]" style={{ width: '92%' }} />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-white border border-[var(--gray-200)] p-1">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="diagnostics">Diagnostics</TabsTrigger>
            <TabsTrigger value="roadmap">90-Day Roadmap</TabsTrigger>
            <TabsTrigger value="canvas">AI Operating Canvas™</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Three Symbioses Radar */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-[var(--caribbean)]" />
                    Three Symbioses™ Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart data={radarData}>
                      <PolarGrid stroke="var(--gray-200)" />
                      <PolarAngleAxis 
                        dataKey="subject" 
                        tick={{ fill: 'var(--gray-600)', fontSize: 12 }}
                      />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: 'var(--gray-600)' }} />
                      <Radar
                        name="Your Score"
                        dataKey="score"
                        stroke="var(--caribbean)"
                        fill="var(--caribbean)"
                        fillOpacity={0.3}
                        strokeWidth={2}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Score Comparison */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-[var(--sage)]" />
                    Performance vs Industry Benchmark
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={barData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--gray-200)" />
                      <XAxis 
                        dataKey="name" 
                        tick={{ fill: 'var(--gray-600)', fontSize: 11 }}
                        angle={-15}
                        textAnchor="end"
                        height={60}
                      />
                      <YAxis domain={[0, 100]} tick={{ fill: 'var(--gray-600)' }} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          border: '1px solid var(--gray-200)',
                          borderRadius: '8px'
                        }}
                      />
                      <Bar dataKey="score" fill="var(--caribbean)" radius={[8, 8, 0, 0]} />
                      <Bar dataKey="benchmark" fill="var(--gray-200)" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                  <div className="flex justify-center gap-6 mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[var(--caribbean)] rounded" />
                      <span className="text-xs text-[var(--gray-600)]">Your Score</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[var(--gray-200)] rounded" />
                      <span className="text-xs text-[var(--gray-600)]">Industry Avg</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Progress Trend */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-[var(--gold)]" />
                  Score Progression (Projected)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart data={trendData}>
                    <defs>
                      <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--caribbean)" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="var(--sage)" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--gray-200)" />
                    <XAxis dataKey="month" tick={{ fill: 'var(--gray-600)' }} />
                    <YAxis domain={[0, 100]} tick={{ fill: 'var(--gray-600)' }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid var(--gray-200)',
                        borderRadius: '8px'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="score" 
                      stroke="var(--caribbean)" 
                      strokeWidth={3}
                      fill="url(#scoreGradient)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Diagnostics Tab */}
          <TabsContent value="diagnostics" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-l-4 border-l-purple-600">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm">Cognitive Symbiosis</CardTitle>
                    <Zap className="h-5 w-5 text-purple-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl text-purple-600 mb-2">{score.cognitiveScore}</div>
                  <p className="text-xs text-[var(--gray-600)] mb-3">Decision Intelligence & AI capabilities</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-[var(--gray-600)]">Decision Making</span>
                      <span className="text-[var(--licorice)]">{responses.cognitive.decisionMaking}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-[var(--gray-600)]">Intelligence Access</span>
                      <span className="text-[var(--licorice)]">{responses.cognitive.intelligenceAccess}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-[var(--gray-600)]">Insight Quality</span>
                      <span className="text-[var(--licorice)]">{responses.cognitive.insightQuality}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-600">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm">Operational Symbiosis</CardTitle>
                    <Target className="h-5 w-5 text-blue-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl text-blue-600 mb-2">{score.operationalScore}</div>
                  <p className="text-xs text-[var(--gray-600)] mb-3">System coherence & workflow integration</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-[var(--gray-600)]">Process Automation</span>
                      <span className="text-[var(--licorice)]">{responses.operational.processAutomation}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-[var(--gray-600)]">Tool Integration</span>
                      <span className="text-[var(--licorice)]">{responses.operational.toolIntegration}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-[var(--gray-600)]">Workflow Coherence</span>
                      <span className="text-[var(--licorice)]">{responses.operational.workflowCoherence}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[var(--caribbean)]">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm">Strategic Symbiosis</CardTitle>
                    <TrendingUp className="h-5 w-5 text-[var(--caribbean)]" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl text-[var(--caribbean)] mb-2">{score.strategicScore}</div>
                  <p className="text-xs text-[var(--gray-600)] mb-3">Alignment & market adaptation</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-[var(--gray-600)]">Strategy Alignment</span>
                      <span className="text-[var(--licorice)]">{responses.strategic.strategyAlignment}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-[var(--gray-600)]">Innovation Velocity</span>
                      <span className="text-[var(--licorice)]">{responses.strategic.innovationVelocity}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-[var(--gray-600)]">ROI Achievement</span>
                      <span className="text-[var(--licorice)]">{responses.strategic.roiAchievement}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[var(--sage)]">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm">Living Systems</CardTitle>
                    <CheckCircle2 className="h-5 w-5 text-[var(--sage)]" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl text-[var(--sage)] mb-2">{score.livingSystemsScore}</div>
                  <p className="text-xs text-[var(--gray-600)] mb-3">Learning & adaptation capabilities</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-[var(--gray-600)]">Infrastructure Learning</span>
                      <span className="text-[var(--licorice)]">{responses.livingSystems.infrastructureLearning}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-[var(--gray-600)]">System Resilience</span>
                      <span className="text-[var(--licorice)]">{responses.livingSystems.systemResilience}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-[var(--gray-600)]">Adaptation Capability</span>
                      <span className="text-[var(--licorice)]">{responses.livingSystems.adaptationCapability}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Challenges & Priorities */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Primary Challenges</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {responses.diagnosticContext.primaryChallenges.map((challenge, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-[var(--gray-50)] rounded-lg">
                        <AlertCircle className="h-4 w-4 text-orange-600 flex-shrink-0" />
                        <span className="text-sm text-[var(--licorice)]">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Your Optimization Priorities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {responses.diagnosticContext.optimizationPriorities.map((priority, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-[var(--gray-50)] rounded-lg">
                        <CheckCircle2 className="h-4 w-4 text-[var(--sage)] flex-shrink-0" />
                        <span className="text-sm text-[var(--licorice)]">{priority}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Roadmap Tab */}
          <TabsContent value="roadmap" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-6 w-6 text-[var(--caribbean)]" />
                  <CardTitle>Your 90-Day Transformation Roadmap</CardTitle>
                </div>
                <p className="text-[var(--gray-600)]">
                  Phased implementation plan customized for {responses.organizationContext.companyName}
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {roadmap.map((phase, index) => {
                    const Icon = phase.icon;
                    return (
                      <div key={index} className="relative">
                        <div className="absolute top-0 left-0 w-1 h-full rounded-full" 
                             style={{ backgroundColor: phase.color, opacity: 0.3 }} />
                        <div className="pl-6 space-y-4">
                          <div>
                            <Badge className="mb-2" style={{ backgroundColor: phase.color }}>
                              {phase.phase}
                            </Badge>
                            <div className="flex items-center gap-2 mb-2">
                              <Icon className="h-5 w-5" style={{ color: phase.color }} />
                              <h3 className="text-[var(--licorice)]">{phase.title}</h3>
                            </div>
                          </div>
                          <ul className="space-y-3">
                            {phase.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-2 text-sm text-[var(--gray-600)]">
                                <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5" 
                                              style={{ color: phase.color }} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="bg-gradient-to-br from-[var(--caribbean)] to-[var(--sage)] text-white border-none">
              <CardContent className="p-8">
                <div className="text-center max-w-3xl mx-auto">
                  <Sparkles className="h-12 w-12 mx-auto mb-4 opacity-90" />
                  <h2 className="text-2xl mb-3">Ready to Accelerate Your Transformation?</h2>
                  <p className="mb-6 text-white opacity-90">
                    Schedule a complimentary 45-minute strategy session to discuss your personalized roadmap 
                    and explore consulting sprints or InfraIQ platform access.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-white text-[var(--caribbean)] hover:bg-[var(--alabaster)]">
                      Book Strategy Session
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:bg-opacity-20"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download Full Report
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI Operating Canvas Tab */}
          <TabsContent value="canvas">
            <AIOperatingModelCanvas />
          </TabsContent>

          {/* Recommendations Tab */}
          <TabsContent value="recommendations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Priority Recommendations & Quick Wins</CardTitle>
                <p className="text-sm text-[var(--gray-600)]">
                  Track your progress - check off recommendations as you implement them
                </p>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex items-center gap-2 text-sm text-[var(--gray-600)]">
                  <CheckCircle2 className="h-4 w-4 text-[var(--caribbean)]" />
                  <span>{checkedRecommendations.size} of {recommendations.length} completed</span>
                </div>
                <div className="space-y-4">
                  {recommendations.map((rec, index) => (
                    <div
                      key={index}
                      className={`p-6 bg-[var(--gray-50)] rounded-xl border-2 transition-all ${
                        checkedRecommendations.has(index)
                          ? 'border-[var(--sage)] bg-[var(--sage)] bg-opacity-10'
                          : 'border-[var(--gray-200)] hover:border-[var(--caribbean)]'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <Checkbox
                          id={`rec-${index}`}
                          checked={checkedRecommendations.has(index)}
                          onCheckedChange={() => toggleRecommendation(index)}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge
                              variant={
                                rec.priority === 'high'
                                  ? 'destructive'
                                  : rec.priority === 'medium'
                                  ? 'default'
                                  : 'secondary'
                              }
                            >
                              {rec.priority} priority
                            </Badge>
                            <span className="text-xs text-[var(--gray-600)]">{rec.timeline}</span>
                          </div>
                          <h3 className={`text-lg mb-2 ${
                            checkedRecommendations.has(index)
                              ? 'text-[var(--gray-600)] line-through'
                              : 'text-[var(--licorice)]'
                          }`}>
                            {rec.title}
                          </h3>
                          <p className="text-sm text-[var(--gray-600)] mb-3">{rec.description}</p>
                          <div className="flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-[var(--sage)]" />
                            <span className="text-sm text-[var(--sage)]">Impact: {rec.impact}</span>
                          </div>
                        </div>
                        {checkedRecommendations.has(index) && (
                          <CheckCircle2 className="h-6 w-6 text-[var(--sage)] flex-shrink-0 mt-1" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}