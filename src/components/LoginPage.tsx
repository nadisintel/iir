import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Alert, AlertDescription } from './ui/alert';
import { 
  Sparkles, 
  BarChart3, 
  TrendingUp, 
  Mail, 
  CheckCircle2, 
  Lock,
  Zap,
  Shield,
  ArrowRight
} from 'lucide-react';

interface LoginPageProps {
  onLogin: (email: string, password: string) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleMagicLinkRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate magic link request
    // In production, this would call your Supabase magic link function
    setTimeout(() => {
      setEmailSent(true);
      setIsSubmitting(false);
      // Auto-login for demo purposes
      setTimeout(() => {
        onLogin(email, '');
      }, 2000);
    }, 1500);
  };

  const features = [
    {
      icon: BarChart3,
      color: 'from-[var(--caribbean)] to-blue-600',
      title: 'Infrastructure Intelligence Score',
      description: 'Comprehensive maturity assessment across 6 critical dimensions'
    },
    {
      icon: TrendingUp,
      color: 'from-[var(--sage)] to-green-600',
      title: '90-Day Transformation Roadmap',
      description: 'Personalized blueprint based on your Three Symbioses™ assessment'
    },
    {
      icon: Zap,
      color: 'from-[var(--gold)] to-yellow-600',
      title: 'AI Operating Model Canvas™',
      description: 'Interactive framework to visualize and optimize your infrastructure'
    }
  ];

  const benefits = [
    'Identify $10K-$50K in monthly optimization opportunities',
    'Benchmark against 500+ growth-stage companies',
    'Get actionable quick wins for immediate implementation',
    'Track progress with checkable recommendations'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--alabaster)] via-white to-[var(--sage)] to-opacity-10">
      <div className="container mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Branding & Value Prop */}
          <div className="hidden lg:block space-y-8">
            <div className="space-y-6">
              <Badge className="bg-[var(--caribbean)] text-white px-4 py-2 text-base">
                <Sparkles className="h-4 w-4 mr-2 inline" />
                Intelligence Infrastructure Roadmap™
              </Badge>
              
              <h1 className="text-5xl text-[var(--licorice)] leading-tight">
                Transform wasted AI spend into{' '}
                <span className="bg-gradient-to-r from-[var(--caribbean)] to-[var(--sage)] bg-clip-text text-transparent">
                  intelligent infrastructure
                </span>
              </h1>
              
              <p className="text-xl text-[var(--gray-600)] leading-relaxed">
                The comprehensive diagnostic platform for growth-stage companies ready to optimize 
                their AI infrastructure for intelligent scale.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-5 bg-white rounded-xl border-2 border-[var(--gray-200)] hover:border-[var(--caribbean)] transition-all">
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg text-[var(--licorice)] mb-1">{feature.title}</h3>
                      <p className="text-[var(--gray-600)]">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t-2 border-[var(--gray-200)]">
              <p className="text-sm text-[var(--gray-600)] mb-3">Trusted by growth-stage companies:</p>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl text-[var(--caribbean)]">500+</div>
                  <div className="text-xs text-[var(--gray-600)]">Companies Analyzed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-[var(--caribbean)]">$10K-50K</div>
                  <div className="text-xs text-[var(--gray-600)]">Avg. Monthly Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-[var(--caribbean)]">10-15m</div>
                  <div className="text-xs text-[var(--gray-600)]">Assessment Time</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Magic Link Auth */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <Card className="border-2 border-[var(--gray-200)] shadow-xl">
              <CardHeader className="space-y-3 pb-6">
                <CardTitle className="text-3xl text-[var(--licorice)]">
                  {emailSent ? 'Check Your Email' : 'Access Your Roadmap'}
                </CardTitle>
                <CardDescription className="text-base text-[var(--gray-600)]">
                  {emailSent 
                    ? 'We\'ve sent you a secure magic link to sign in'
                    : 'Sign in with a secure magic link - no password needed'
                  }
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {emailSent ? (
                  /* Email Sent Success State */
                  <div className="space-y-6">
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-[var(--sage)] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail className="w-8 h-8 text-[var(--sage)]" />
                      </div>
                      <h3 className="text-xl text-[var(--licorice)] mb-2">Magic Link Sent!</h3>
                      <p className="text-[var(--gray-600)] mb-4">
                        We've sent a secure sign-in link to:
                      </p>
                      <p className="text-lg text-[var(--caribbean)]">{email}</p>
                    </div>

                    <Alert className="border-[var(--caribbean)] border-2 bg-[var(--caribbean)] bg-opacity-5">
                      <Shield className="h-4 w-4 text-[var(--caribbean)]" />
                      <AlertDescription className="text-[var(--gray-700)]">
                        Click the link in your email to securely access your Intelligence Infrastructure Roadmap™ dashboard.
                      </AlertDescription>
                    </Alert>

                    <div className="space-y-3 text-sm text-[var(--gray-600)]">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[var(--sage)] flex-shrink-0 mt-0.5" />
                        <span>Link expires in 60 minutes for security</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[var(--sage)] flex-shrink-0 mt-0.5" />
                        <span>Check your spam folder if you don't see it</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[var(--sage)] flex-shrink-0 mt-0.5" />
                        <span>No password required - just click and go</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[var(--gray-200)]">
                      <Button
                        onClick={() => setEmailSent(false)}
                        variant="outline"
                        className="w-full border-2 border-[var(--gray-300)] hover:border-[var(--caribbean)]"
                      >
                        Use a Different Email
                      </Button>
                    </div>
                  </div>
                ) : (
                  /* Magic Link Request Form */
                  <div className="space-y-6">
                    <form onSubmit={handleMagicLinkRequest} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-base">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--gray-400)]" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            disabled={isSubmitting}
                            className="pl-10 h-12 text-base border-2 border-[var(--gray-200)] focus:border-[var(--caribbean)]"
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 bg-[var(--caribbean)] hover:bg-[var(--caribbean-dark)] text-white text-base"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="mr-2">Sending Magic Link...</span>
                          </>
                        ) : (
                          <>
                            <span className="mr-2">Send Magic Link</span>
                            <ArrowRight className="h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </form>

                    {/* How It Works */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="h-px flex-1 bg-[var(--gray-200)]"></div>
                        <span className="text-sm text-[var(--gray-500)]">How it works</span>
                        <div className="h-px flex-1 bg-[var(--gray-200)]"></div>
                      </div>

                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div>
                          <div className="w-10 h-10 bg-[var(--caribbean)] text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm">
                            1
                          </div>
                          <p className="text-xs text-[var(--gray-600)]">Enter your email</p>
                        </div>
                        <div>
                          <div className="w-10 h-10 bg-[var(--caribbean)] text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm">
                            2
                          </div>
                          <p className="text-xs text-[var(--gray-600)]">Check your inbox</p>
                        </div>
                        <div>
                          <div className="w-10 h-10 bg-[var(--caribbean)] text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm">
                            3
                          </div>
                          <p className="text-xs text-[var(--gray-600)]">Click to sign in</p>
                        </div>
                      </div>
                    </div>

                    {/* Security Badge */}
                    <div className="bg-gradient-to-br from-[var(--caribbean)] from-opacity-5 to-[var(--sage)] to-opacity-5 p-4 rounded-lg border border-[var(--sage)] border-opacity-30">
                      <div className="flex items-start gap-3">
                        <Lock className="h-5 w-5 text-[var(--caribbean)] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-[var(--licorice)] mb-1">
                            <strong>Secure Authentication</strong>
                          </p>
                          <p className="text-xs text-[var(--gray-600)]">
                            Magic links are more secure than passwords and expire after one use or 60 minutes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* What You'll Get */}
                {!emailSent && (
                  <div className="pt-6 border-t-2 border-[var(--gray-200)] space-y-3">
                    <p className="text-sm text-[var(--gray-500)]">What you'll get after signing in:</p>
                    <div className="space-y-2">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[var(--sage)] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-[var(--gray-600)]">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Purchase Info */}
            <div className="mt-6 text-center">
              <p className="text-sm text-[var(--gray-600)]">
                Don't have access yet?{' '}
                <a href="#" className="text-[var(--caribbean)] hover:underline">
                  Purchase Intelligence Infrastructure Roadmap™
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}