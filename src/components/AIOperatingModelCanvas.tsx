import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Download, 
  BarChart3, 
  Cog, 
  Lightbulb, 
  DollarSign, 
  Target,
  TrendingUp,
  Calendar
} from 'lucide-react';

export function AIOperatingModelCanvas() {
  const [vision, setVision] = useState('');
  const [priority90Day, setPriority90Day] = useState('');
  const [techSpend, setTechSpend] = useState('');
  const [timeSaved, setTimeSaved] = useState('');
  const [toolAdoption, setToolAdoption] = useState('');

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="border-2 border-[var(--caribbean)] bg-gradient-to-br from-white to-[var(--sage)] to-opacity-10">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl text-[var(--caribbean)] mb-2">
                AI Operating Model Canvas™
              </CardTitle>
              <p className="text-[var(--gray-600)]">
                From Chaos → Symbiotic System | Interactive framework to manage your infrastructure
              </p>
            </div>
            <Button variant="outline" className="border-[var(--caribbean)] text-[var(--caribbean)]">
              <Download className="h-4 w-4 mr-2" />
              Export PDF
            </Button>
          </div>
        </CardHeader>
      </Card>

      <Tabs defaultValue="strategic" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="strategic">Strategic Alignment</TabsTrigger>
          <TabsTrigger value="systems">Three Work Systems</TabsTrigger>
          <TabsTrigger value="infrastructure">Infrastructure Reality</TabsTrigger>
          <TabsTrigger value="metrics">Key Metrics</TabsTrigger>
        </TabsList>

        {/* Strategic Alignment Layer */}
        <TabsContent value="strategic" className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[var(--caribbean)]">
                  <Target className="h-5 w-5" />
                  Vision & North Star
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Our AI Vision</Label>
                  <Textarea
                    placeholder="Describe your AI transformation vision..."
                    value={vision}
                    onChange={(e) => setVision(e.target.value)}
                    rows={3}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label>90-Day Priority</Label>
                  <Input
                    placeholder="e.g., Consolidate tools and reduce spend by 30%"
                    value={priority90Day}
                    onChange={(e) => setPriority90Day(e.target.value)}
                    className="mt-2"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[var(--sage)]">
                  <BarChart3 className="h-5 w-5" />
                  Key Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Tech Spend (% of revenue)</Label>
                  <div className="flex gap-2 mt-2">
                    <Input
                      type="number"
                      placeholder="5"
                      value={techSpend}
                      onChange={(e) => setTechSpend(e.target.value)}
                    />
                    <Badge variant={Number(techSpend) < 5 ? 'default' : 'destructive'}>
                      {Number(techSpend) < 5 ? '🟢' : Number(techSpend) < 10 ? '🟡' : '🔴'}
                    </Badge>
                  </div>
                  <p className="text-xs text-[var(--gray-600)] mt-1">Target: &lt;5%</p>
                </div>
                <div>
                  <Label>Time Saved (hrs/week)</Label>
                  <div className="flex gap-2 mt-2">
                    <Input
                      type="number"
                      placeholder="20"
                      value={timeSaved}
                      onChange={(e) => setTimeSaved(e.target.value)}
                    />
                    <Badge variant={Number(timeSaved) >= 20 ? 'default' : 'destructive'}>
                      {Number(timeSaved) >= 20 ? '🟢' : Number(timeSaved) >= 10 ? '🟡' : '🔴'}
                    </Badge>
                  </div>
                  <p className="text-xs text-[var(--gray-600)] mt-1">Target: 20+ hrs</p>
                </div>
                <div>
                  <Label>Tool Adoption (%)</Label>
                  <div className="flex gap-2 mt-2">
                    <Input
                      type="number"
                      placeholder="80"
                      value={toolAdoption}
                      onChange={(e) => setToolAdoption(e.target.value)}
                    />
                    <Badge variant={Number(toolAdoption) >= 80 ? 'default' : 'destructive'}>
                      {Number(toolAdoption) >= 80 ? '🟢' : Number(toolAdoption) >= 50 ? '🟡' : '🔴'}
                    </Badge>
                  </div>
                  <p className="text-xs text-[var(--gray-600)] mt-1">Target: &gt;80%</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[var(--gold)]">
                  <TrendingUp className="h-5 w-5" />
                  Growth Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>12-Month Targets</Label>
                  <div className="space-y-2 mt-2">
                    <Input placeholder="Scale: ___x" />
                    <Input placeholder="Revenue: $_____" />
                    <Input placeholder="Team Size: ____" />
                  </div>
                </div>
                <div>
                  <Label>Next Milestone</Label>
                  <Input placeholder="Next major goal" className="mt-2" />
                  <Input type="date" className="mt-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Three Work Systems */}
        <TabsContent value="systems" className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="border-l-4 border-l-purple-600">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    🧠 Cognitive
                  </CardTitle>
                  <Badge>Health: 🟢</Badge>
                </div>
                <p className="text-sm text-[var(--gray-600)]">How We Analyze</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>System Owner</Label>
                  <Input placeholder="Name or Role" className="mt-2" />
                </div>
                <div>
                  <Label>Data Sources</Label>
                  <Textarea placeholder="List key data sources..." rows={3} className="mt-2" />
                </div>
                <div>
                  <Label>Analysis Rhythm</Label>
                  <div className="space-y-2 mt-2">
                    <Input placeholder="Daily: ________" />
                    <Input placeholder="Weekly: ________" />
                    <Input placeholder="Monthly: ________" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    ⚙️ Operational
                  </CardTitle>
                  <Badge>Health: 🟡</Badge>
                </div>
                <p className="text-sm text-[var(--gray-600)]">How We Execute</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>System Owner</Label>
                  <Input placeholder="Name or Role" className="mt-2" />
                </div>
                <div>
                  <Label>Core Workflows</Label>
                  <div className="space-y-2 mt-2">
                    <Input placeholder="Sales: ________" />
                    <Input placeholder="Service: ________" />
                    <Input placeholder="Support: ________" />
                  </div>
                </div>
                <div>
                  <Label>Team Rituals</Label>
                  <div className="space-y-2 mt-2">
                    <Input placeholder="Daily: ________" />
                    <Input placeholder="Weekly: ________" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[var(--caribbean)]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    🎯 Strategic
                  </CardTitle>
                  <Badge variant="destructive">Health: 🔴</Badge>
                </div>
                <p className="text-sm text-[var(--gray-600)]">How We Evolve</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>System Owner</Label>
                  <Input placeholder="Name or Role" className="mt-2" />
                </div>
                <div>
                  <Label>Decision Rights</Label>
                  <div className="space-y-2 mt-2">
                    <Input placeholder="<$100: Team" />
                    <Input placeholder="<$500: ________" />
                    <Input placeholder="$500+: ________" />
                  </div>
                </div>
                <div>
                  <Label>Innovation Flow</Label>
                  <div className="space-y-2 mt-2">
                    <Input placeholder="Test Budget: $_____" />
                    <Input placeholder="Sunset: 30 days" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Infrastructure Reality */}
        <TabsContent value="infrastructure" className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[var(--caribbean)]">
                  <Cog className="h-5 w-5" />
                  Current Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Cognitive Tools ($/mo)</Label>
                  <div className="space-y-2 mt-2">
                    <div className="flex gap-2">
                      <Input placeholder="Tool name" className="flex-1" />
                      <Input placeholder="$" className="w-20" />
                    </div>
                    <div className="flex gap-2">
                      <Input placeholder="Tool name" className="flex-1" />
                      <Input placeholder="$" className="w-20" />
                    </div>
                  </div>
                </div>
                <div>
                  <Label>Operational Tools ($/mo)</Label>
                  <div className="space-y-2 mt-2">
                    <div className="flex gap-2">
                      <Input placeholder="Tool name" className="flex-1" />
                      <Input placeholder="$" className="w-20" />
                    </div>
                    <div className="flex gap-2">
                      <Input placeholder="Tool name" className="flex-1" />
                      <Input placeholder="$" className="w-20" />
                    </div>
                  </div>
                </div>
                <div>
                  <Label>Strategic Tools ($/mo)</Label>
                  <div className="space-y-2 mt-2">
                    <div className="flex gap-2">
                      <Input placeholder="Tool name" className="flex-1" />
                      <Input placeholder="$" className="w-20" />
                    </div>
                  </div>
                </div>
                <div className="pt-2 border-t">
                  <Label>TOTAL</Label>
                  <Input placeholder="$_____ /mo" className="mt-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[var(--sage)]">
                  <Lightbulb className="h-5 w-5" />
                  Connections
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="flex items-center gap-2">
                    ✅ Strong Links
                  </Label>
                  <div className="space-y-2 mt-2">
                    <Input placeholder="Tool A ↔ Tool B" />
                    <Input placeholder="Tool C ↔ Tool D" />
                  </div>
                </div>
                <div>
                  <Label className="flex items-center gap-2">
                    ❌ Broken Links
                  </Label>
                  <div className="space-y-2 mt-2">
                    <Input placeholder="Tool E ✗ Tool F" />
                    <Input placeholder="Tool G ✗ Tool H" />
                  </div>
                </div>
                <div>
                  <Label className="flex items-center gap-2">
                    🔄 Planned
                  </Label>
                  <div className="space-y-2 mt-2">
                    <Input placeholder="Tool I → Tool J" />
                    <Input placeholder="Tool K → Tool L" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[var(--gold)]">
                  <Calendar className="h-5 w-5" />
                  Gaps to Fill
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Quick Wins</Label>
                  <div className="space-y-2 mt-2">
                    <div className="flex gap-2">
                      <Input placeholder="Action" className="flex-1" />
                      <Input placeholder="Week" className="w-20" />
                    </div>
                    <div className="flex gap-2">
                      <Input placeholder="Action" className="flex-1" />
                      <Input placeholder="Week" className="w-20" />
                    </div>
                  </div>
                </div>
                <div>
                  <Label>Big Opportunities</Label>
                  <div className="space-y-2 mt-2">
                    <div className="flex gap-2">
                      <Input placeholder="Project" className="flex-1" />
                      <Input placeholder="Month" className="w-20" />
                    </div>
                    <div className="flex gap-2">
                      <Input placeholder="Project" className="flex-1" />
                      <Input placeholder="Month" className="w-20" />
                    </div>
                  </div>
                </div>
                <div>
                  <Label>Resources Needed</Label>
                  <div className="space-y-2 mt-2">
                    <div className="flex gap-2">
                      <Input placeholder="Resource" className="flex-1" />
                      <Input placeholder="$" className="w-20" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Progress Indicator */}
          <Card className="bg-gradient-to-r from-[var(--caribbean)] to-[var(--sage)] text-white">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-sm opacity-90 mb-1">Current State</p>
                  <p className="text-2xl">Disconnected</p>
                  <p className="text-sm opacity-75">Scale: 1.0</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-4xl">→</div>
                </div>
                <div>
                  <p className="text-sm opacity-90 mb-1">Target State</p>
                  <p className="text-2xl">Integrated</p>
                  <p className="text-sm opacity-75">Scale: 2.5+</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Key Metrics Dashboard */}
        <TabsContent value="metrics" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Progress Tracker</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-[var(--gray-50)] rounded-lg">
                  <Label>This Week's Win</Label>
                  <Input placeholder="Describe your achievement..." className="mt-2" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Hours Saved</Label>
                    <Input type="number" placeholder="0" className="mt-2" />
                  </div>
                  <div>
                    <Label>$ Saved</Label>
                    <Input type="number" placeholder="0" className="mt-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Success Criteria Checklist</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-[var(--gray-50)] rounded">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>Tech spend ratio decreasing</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[var(--gray-50)] rounded">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>20+ hours/week saved consistently</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[var(--gray-50)] rounded">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>80%+ adoption on core tools</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[var(--gray-50)] rounded">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>All systems show green health</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[var(--gray-50)] rounded">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>New hires understand infrastructure in 5 min</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Start Guide */}
          <Card className="border-2 border-[var(--gold)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[var(--gold)]">
                <Target className="h-5 w-5" />
                First Time? Start Here
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-[var(--gray-50)] rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-[var(--caribbean)] text-white rounded-full flex items-center justify-center">1</div>
                    <h4>Inventory</h4>
                  </div>
                  <p className="text-sm text-[var(--gray-600)]">List your top 5 tools with monthly costs</p>
                </div>
                <div className="p-4 bg-[var(--gray-50)] rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-[var(--sage)] text-white rounded-full flex items-center justify-center">2</div>
                    <h4>Fix One Link</h4>
                  </div>
                  <p className="text-sm text-[var(--gray-600)]">Pick one broken connection to repair this week</p>
                </div>
                <div className="p-4 bg-[var(--gray-50)] rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-[var(--gold)] text-white rounded-full flex items-center justify-center">3</div>
                    <h4>Set Goal</h4>
                  </div>
                  <p className="text-sm text-[var(--gray-600)]">Define one clear 30-day improvement goal</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}