import { Button } from './ui/button';
import { ArrowRight, Zap, Target, TrendingUp, CheckCircle2 } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

export function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--alabaster)] via-[var(--gray-50)] to-[var(--sage)] to-opacity-20">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[var(--caribbean)] text-white rounded-full mb-6">
            Intelligence Infrastructure Roadmap™
          </div>
          <h1 className="mb-6 text-[var(--licorice)]">
            Turn wasted AI spend into a 90-day roadmap for intelligent infrastructure
          </h1>
          <p className="text-[var(--gray-600)] max-w-3xl mx-auto mb-8">
            The foundational protocol for intelligent scale. Transform organizational data into a personalized roadmap for Growth Infrastructure Intelligence optimization.
          </p>
          <Button onClick={onStart} size="lg" className="bg-[var(--caribbean)] hover:bg-[var(--caribbean-dark)] text-white">
            Start Your Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="mt-4 text-[var(--gray-600)]">
            <CheckCircle2 className="inline h-4 w-4 mr-1 text-[var(--sage)]" />
            10-15 minutes • Personalized 90-day roadmap • Trusted by growth-stage companies
          </p>
        </div>

        {/* Three Symbioses Framework */}
        <div className="mb-16">
          <h2 className="text-center mb-10 text-[var(--licorice)]">
            Built on the Three Symbioses™ Framework
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-[var(--gray-200)]">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="mb-3 text-[var(--licorice)]">Cognitive Symbiosis</h3>
              <p className="text-[var(--gray-600)] mb-4">
                Decision Intelligence & AI-enhanced capabilities
              </p>
              <ul className="space-y-2 text-[var(--gray-600)]">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[var(--sage)] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Reduce decision latency</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[var(--sage)] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Improve leadership visibility</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[var(--sage)] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Enhance insight quality</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-[var(--gray-200)]">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mb-3 text-[var(--licorice)]">Operational Symbiosis</h3>
              <p className="text-[var(--gray-600)] mb-4">
                System Coherence & workflow integration
              </p>
              <ul className="space-y-2 text-[var(--gray-600)]">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[var(--sage)] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Optimize processes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[var(--sage)] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Eliminate waste</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[var(--sage)] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Scale efficiently</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-[var(--gray-200)]">
              <div className="w-12 h-12 bg-[var(--caribbean)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-[var(--caribbean)]" />
              </div>
              <h3 className="mb-3 text-[var(--licorice)]">Strategic Symbiosis</h3>
              <p className="text-[var(--gray-600)] mb-4">
                Alignment & market adaptation
              </p>
              <ul className="space-y-2 text-[var(--gray-600)]">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[var(--sage)] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Increase ROI</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[var(--sage)] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Build competitive advantage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[var(--sage)] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Accelerate innovation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-white rounded-xl p-10 shadow-lg border border-[var(--gray-200)] mb-16">
          <h2 className="text-center mb-8 text-[var(--licorice)]">
            What You'll Receive
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="mb-4 text-[var(--licorice)]">Executive Dashboard</h3>
              <ul className="space-y-3 text-[var(--gray-600)]">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[var(--caribbean)] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Growth Infrastructure Intelligence Score with peer comparison</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[var(--caribbean)] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Infrastructure waste estimate and cost optimization potential</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[var(--caribbean)] mr-2 mt-0.5 flex-shrink-0" />
                  <span>ROI projections from recommended improvements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[var(--caribbean)] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Priority quick wins for immediate implementation</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-[var(--licorice)]">90-Day Implementation Blueprint</h3>
              <ul className="space-y-3 text-[var(--gray-600)]">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[var(--caribbean)] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Transformation roadmap with specific milestones</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[var(--caribbean)] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Tool recommendations and integration strategy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[var(--caribbean)] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Resource allocation and investment planning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[var(--caribbean)] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Success metrics and progress tracking framework</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button onClick={onStart} size="lg" className="bg-[var(--caribbean)] hover:bg-[var(--caribbean-dark)] text-white">
            Begin Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="mt-6 text-[var(--gray-600)]">
            Join growth-stage companies ($2M-$20M) in SaaS, professional services, and technology sectors
          </p>
        </div>
      </div>
    </div>
  );
}