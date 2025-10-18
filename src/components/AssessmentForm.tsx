import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Progress } from './ui/progress';
import { ScaleSlider } from './ScaleSlider';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { AssessmentResponse } from '../types/assessment';
import {
  industries,
  aiToolOptions,
  revenueRanges,
  companySizes,
  spendRanges,
  urgencyLevels,
  cognitiveQuestions,
  operationalQuestions,
  strategicQuestions,
  livingSystemsQuestions,
  challengeOptions,
  priorityOptions,
} from '../data/questions';

interface AssessmentFormProps {
  onComplete: (responses: AssessmentResponse) => void;
}

export function AssessmentForm({ onComplete }: AssessmentFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState<AssessmentResponse>({
    organizationContext: {
      companyName: '',
      email: '',
      revenue: '',
      companySize: '',
      industry: '',
      aiTools: [],
      monthlySpend: '',
    },
    cognitive: {
      decisionMaking: 50,
      intelligenceAccess: 50,
      decisionLatency: 50,
      insightQuality: 50,
      cognitiveLoad: 50,
    },
    operational: {
      processAutomation: 50,
      toolIntegration: 50,
      operationalEfficiency: 50,
      dailyUsage: 50,
      wasteReduction: 50,
      workflowCoherence: 50,
    },
    strategic: {
      strategyAlignment: 50,
      competitiveIntelligence: 50,
      innovationVelocity: 50,
      roiAchievement: 50,
      strategicDifferentiation: 50,
    },
    livingSystems: {
      infrastructureLearning: 50,
      systemResilience: 50,
      humanAiCollaboration: 50,
      unexpectedValue: 50,
      adaptationCapability: 50,
    },
    diagnosticContext: {
      primaryChallenges: [],
      optimizationPriorities: [],
      implementationUrgency: '',
    },
  });

  const totalSteps = 6;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return (
          responses.organizationContext.companyName &&
          responses.organizationContext.email &&
          responses.organizationContext.revenue &&
          responses.organizationContext.companySize &&
          responses.organizationContext.industry &&
          responses.organizationContext.aiTools.length > 0 &&
          responses.organizationContext.monthlySpend
        );
      case 5:
        return (
          responses.diagnosticContext.primaryChallenges.length > 0 &&
          responses.diagnosticContext.optimizationPriorities.length > 0 &&
          responses.diagnosticContext.implementationUrgency
        );
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onComplete(responses);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleArrayItem = (array: string[], item: string) => {
    if (array.includes(item)) {
      return array.filter((i) => i !== item);
    } else {
      return [...array, item];
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--alabaster)] via-[var(--gray-50)] to-[var(--sage)] to-opacity-20 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Progress Header */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-[var(--gray-200)] mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[var(--licorice)]">
              Step {currentStep + 1} of {totalSteps}
            </span>
            <span className="text-[var(--gray-600)]">{Math.round(progress)}% Complete</span>
          </div>
          <div className="h-2 bg-[var(--gray-200)] rounded-full overflow-hidden">
            <div
              className="h-full progress-gradient transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-[var(--gray-200)] mb-8">
          {/* Step 0: Organizational Context */}
          {currentStep === 0 && (
            <div className="space-y-6">
              <div>
                <h2 className="mb-2 text-slate-900">Organizational Context</h2>
                <p className="text-slate-600">
                  Tell us about your organization to personalize your roadmap.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="companyName">Company Name *</Label>
                  <Input
                    id="companyName"
                    value={responses.organizationContext.companyName}
                    onChange={(e) =>
                      setResponses({
                        ...responses,
                        organizationContext: {
                          ...responses.organizationContext,
                          companyName: e.target.value,
                        },
                      })
                    }
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={responses.organizationContext.email}
                    onChange={(e) =>
                      setResponses({
                        ...responses,
                        organizationContext: {
                          ...responses.organizationContext,
                          email: e.target.value,
                        },
                      })
                    }
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="revenue">Annual Revenue Range *</Label>
                  <Select
                    value={responses.organizationContext.revenue}
                    onValueChange={(value) =>
                      setResponses({
                        ...responses,
                        organizationContext: {
                          ...responses.organizationContext,
                          revenue: value,
                        },
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select revenue range" />
                    </SelectTrigger>
                    <SelectContent>
                      {revenueRanges.map((range) => (
                        <SelectItem key={range} value={range}>
                          {range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="companySize">Company Size *</Label>
                  <Select
                    value={responses.organizationContext.companySize}
                    onValueChange={(value) =>
                      setResponses({
                        ...responses,
                        organizationContext: {
                          ...responses.organizationContext,
                          companySize: value,
                        },
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      {companySizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="industry">Industry *</Label>
                  <Select
                    value={responses.organizationContext.industry}
                    onValueChange={(value) =>
                      setResponses({
                        ...responses,
                        organizationContext: {
                          ...responses.organizationContext,
                          industry: value,
                        },
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem key={industry} value={industry}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>AI Tools Currently Used * (Select all that apply)</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                    {aiToolOptions.map((tool) => (
                      <div key={tool} className="flex items-center space-x-2">
                        <Checkbox
                          id={tool}
                          checked={responses.organizationContext.aiTools.includes(tool)}
                          onCheckedChange={() =>
                            setResponses({
                              ...responses,
                              organizationContext: {
                                ...responses.organizationContext,
                                aiTools: toggleArrayItem(
                                  responses.organizationContext.aiTools,
                                  tool
                                ),
                              },
                            })
                          }
                        />
                        <label htmlFor={tool} className="text-slate-700 cursor-pointer">
                          {tool}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="monthlySpend">Estimated Monthly AI Spend *</Label>
                  <Select
                    value={responses.organizationContext.monthlySpend}
                    onValueChange={(value) =>
                      setResponses({
                        ...responses,
                        organizationContext: {
                          ...responses.organizationContext,
                          monthlySpend: value,
                        },
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select monthly spend" />
                    </SelectTrigger>
                    <SelectContent>
                      {spendRanges.map((range) => (
                        <SelectItem key={range} value={range}>
                          {range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Step 1: Cognitive Symbiosis */}
          {currentStep === 1 && (
            <div className="space-y-8">
              <div className="border-b-4 border-[var(--caribbean)] pb-4 mb-8">
                <h2 className="mb-3 text-[var(--licorice)] text-3xl">Cognitive Symbiosis Assessment</h2>
                <p className="text-[var(--gray-600)] text-lg">
                  Evaluate your decision intelligence and AI-enhanced capabilities.
                </p>
              </div>

              {cognitiveQuestions.map((q) => (
                <ScaleSlider
                  key={q.id}
                  value={responses.cognitive[q.id as keyof typeof responses.cognitive]}
                  onChange={(value) =>
                    setResponses({
                      ...responses,
                      cognitive: {
                        ...responses.cognitive,
                        [q.id]: value,
                      },
                    })
                  }
                  question={q.question}
                  description={q.description}
                />
              ))}
            </div>
          )}

          {/* Step 2: Operational Symbiosis */}
          {currentStep === 2 && (
            <div className="space-y-8">
              <div className="border-b-4 border-blue-600 pb-4 mb-8">
                <h2 className="mb-3 text-[var(--licorice)] text-3xl">Operational Symbiosis Assessment</h2>
                <p className="text-[var(--gray-600)] text-lg">
                  Assess your system coherence and workflow integration.
                </p>
              </div>

              {operationalQuestions.map((q) => (
                <ScaleSlider
                  key={q.id}
                  value={responses.operational[q.id as keyof typeof responses.operational]}
                  onChange={(value) =>
                    setResponses({
                      ...responses,
                      operational: {
                        ...responses.operational,
                        [q.id]: value,
                      },
                    })
                  }
                  question={q.question}
                  description={q.description}
                />
              ))}
            </div>
          )}

          {/* Step 3: Strategic Symbiosis */}
          {currentStep === 3 && (
            <div className="space-y-8">
              <div className="border-b-4 border-[var(--sage)] pb-4 mb-8">
                <h2 className="mb-3 text-[var(--licorice)] text-3xl">Strategic Symbiosis Assessment</h2>
                <p className="text-[var(--gray-600)] text-lg">
                  Measure alignment and market adaptation capabilities.
                </p>
              </div>

              {strategicQuestions.map((q) => (
                <ScaleSlider
                  key={q.id}
                  value={responses.strategic[q.id as keyof typeof responses.strategic]}
                  onChange={(value) =>
                    setResponses({
                      ...responses,
                      strategic: {
                        ...responses.strategic,
                        [q.id]: value,
                      },
                    })
                  }
                  question={q.question}
                  description={q.description}
                />
              ))}
            </div>
          )}

          {/* Step 4: Living Systems Vitality */}
          {currentStep === 4 && (
            <div className="space-y-8">
              <div className="border-b-4 border-[var(--gold)] pb-4 mb-8">
                <h2 className="mb-3 text-[var(--licorice)] text-3xl">Living Systems Vitality</h2>
                <p className="text-[var(--gray-600)] text-lg">
                  Evaluate infrastructure learning, adaptation, and resilience.
                </p>
              </div>

              {livingSystemsQuestions.map((q) => (
                <ScaleSlider
                  key={q.id}
                  value={responses.livingSystems[q.id as keyof typeof responses.livingSystems]}
                  onChange={(value) =>
                    setResponses({
                      ...responses,
                      livingSystems: {
                        ...responses.livingSystems,
                        [q.id]: value,
                      },
                    })
                  }
                  question={q.question}
                  description={q.description}
                />
              ))}
            </div>
          )}

          {/* Step 5: Diagnostic Context */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div>
                <h2 className="mb-2 text-slate-900">Diagnostic Context</h2>
                <p className="text-slate-600">
                  Help us understand your priorities and challenges.
                </p>
              </div>

              <div>
                <Label>Primary Infrastructure Challenges * (Select all that apply)</Label>
                <div className="grid grid-cols-1 gap-3 mt-2">
                  {challengeOptions.map((challenge) => (
                    <div key={challenge} className="flex items-center space-x-2">
                      <Checkbox
                        id={challenge}
                        checked={responses.diagnosticContext.primaryChallenges.includes(
                          challenge
                        )}
                        onCheckedChange={() =>
                          setResponses({
                            ...responses,
                            diagnosticContext: {
                              ...responses.diagnosticContext,
                              primaryChallenges: toggleArrayItem(
                                responses.diagnosticContext.primaryChallenges,
                                challenge
                              ),
                            },
                          })
                        }
                      />
                      <label htmlFor={challenge} className="text-slate-700 cursor-pointer">
                        {challenge}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label>Top Optimization Priorities * (Select all that apply)</Label>
                <div className="grid grid-cols-1 gap-3 mt-2">
                  {priorityOptions.map((priority) => (
                    <div key={priority} className="flex items-center space-x-2">
                      <Checkbox
                        id={priority}
                        checked={responses.diagnosticContext.optimizationPriorities.includes(
                          priority
                        )}
                        onCheckedChange={() =>
                          setResponses({
                            ...responses,
                            diagnosticContext: {
                              ...responses.diagnosticContext,
                              optimizationPriorities: toggleArrayItem(
                                responses.diagnosticContext.optimizationPriorities,
                                priority
                              ),
                            },
                          })
                        }
                      />
                      <label htmlFor={priority} className="text-slate-700 cursor-pointer">
                        {priority}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="urgency">Implementation Urgency *</Label>
                <Select
                  value={responses.diagnosticContext.implementationUrgency}
                  onValueChange={(value) =>
                    setResponses({
                      ...responses,
                      diagnosticContext: {
                        ...responses.diagnosticContext,
                        implementationUrgency: value,
                      },
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select urgency level" />
                  </SelectTrigger>
                  <SelectContent>
                    {urgencyLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 0}
            className="min-w-32 border-[var(--gray-200)]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={!canProceed()}
            className="bg-[var(--caribbean)] hover:bg-[var(--caribbean-dark)] text-white min-w-32"
          >
            {currentStep === totalSteps - 1 ? 'View Results' : 'Next'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}