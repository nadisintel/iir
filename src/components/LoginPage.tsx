import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Sparkles, BarChart3, TrendingUp } from 'lucide-react';

interface LoginPageProps {
  onLogin: (email: string, password: string) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupCompany, setSignupCompany] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(loginEmail, loginPassword);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would create an account first
    onLogin(signupEmail, signupPassword);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--alabaster)] via-[var(--gray-50)] to-[var(--sage-light)] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Branding Section */}
        <div className="hidden lg:block space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--caribbean)] text-white rounded-full">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm">Intelligence Infrastructure Platform™</span>
            </div>
            <h1 className="text-5xl text-[var(--licorice)] leading-tight">
              Transform AI Chaos Into
              <span className="block text-[var(--caribbean)]">Intelligent Infrastructure</span>
            </h1>
            <p className="text-xl text-[var(--gray-600)]">
              The diagnostic platform for growth-stage companies turning wasted AI spend into strategic advantage.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[var(--gray-200)]">
              <div className="w-12 h-12 bg-[var(--caribbean)] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <BarChart3 className="h-6 w-6 text-[var(--caribbean)]" />
              </div>
              <div>
                <h3 className="text-[var(--licorice)] mb-1">90-Day Transformation Roadmap</h3>
                <p className="text-[var(--gray-600)]">
                  Personalized blueprint based on your Three Symbioses™ assessment
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[var(--gray-200)]">
              <div className="w-12 h-12 bg-[var(--sage)] bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-[var(--sage)]" />
              </div>
              <div>
                <h3 className="text-[var(--licorice)] mb-1">AI Operating Model Canvas™</h3>
                <p className="text-[var(--gray-600)]">
                  Interactive framework to visualize and manage your infrastructure
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Login/Signup Card */}
        <Card className="border-2 border-[var(--gray-200)]">
          <CardHeader className="space-y-1">
            <CardTitle className="text-[var(--licorice)]">Welcome to InfraIQ™</CardTitle>
            <CardDescription className="text-[var(--gray-600)]">
              Sign in to access your diagnostic dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Create Account</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="your@email.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      required
                      className="border-[var(--gray-200)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="••••••••"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      required
                      className="border-[var(--gray-200)]"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[var(--caribbean)] hover:bg-[var(--caribbean-dark)] text-white"
                  >
                    Sign In
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Full Name</Label>
                    <Input
                      id="signup-name"
                      type="text"
                      placeholder="John Doe"
                      value={signupName}
                      onChange={(e) => setSignupName(e.target.value)}
                      required
                      className="border-[var(--gray-200)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-company">Company Name</Label>
                    <Input
                      id="signup-company"
                      type="text"
                      placeholder="Your Company"
                      value={signupCompany}
                      onChange={(e) => setSignupCompany(e.target.value)}
                      required
                      className="border-[var(--gray-200)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="your@email.com"
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      required
                      className="border-[var(--gray-200)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      placeholder="••••••••"
                      value={signupPassword}
                      onChange={(e) => setSignupPassword(e.target.value)}
                      required
                      className="border-[var(--gray-200)]"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[var(--caribbean)] hover:bg-[var(--caribbean-dark)] text-white"
                  >
                    Create Account & Start Diagnostic
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 pt-6 border-t border-[var(--gray-200)] text-center">
              <p className="text-sm text-[var(--gray-600)]">
                By signing up, you agree to receive your personalized diagnostic report
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
