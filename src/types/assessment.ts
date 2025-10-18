export interface AssessmentResponse {
  organizationContext: {
    companyName: string;
    email: string;
    revenue: string;
    companySize: string;
    industry: string;
    aiTools: string[];
    monthlySpend: string;
  };
  cognitive: {
    decisionMaking: number;
    intelligenceAccess: number;
    decisionLatency: number;
    insightQuality: number;
    cognitiveLoad: number;
  };
  operational: {
    processAutomation: number;
    toolIntegration: number;
    operationalEfficiency: number;
    dailyUsage: number;
    wasteReduction: number;
    workflowCoherence: number;
  };
  strategic: {
    strategyAlignment: number;
    competitiveIntelligence: number;
    innovationVelocity: number;
    roiAchievement: number;
    strategicDifferentiation: number;
  };
  livingSystems: {
    infrastructureLearning: number;
    systemResilience: number;
    humanAiCollaboration: number;
    unexpectedValue: number;
    adaptationCapability: number;
  };
  diagnosticContext: {
    primaryChallenges: string[];
    optimizationPriorities: string[];
    implementationUrgency: string;
  };
}

export interface ScoreResult {
  totalScore: number;
  maturityLevel: 'fragmented' | 'emerging' | 'developing' | 'maturing' | 'living';
  maturityLabel: string;
  maturityEmoji: string;
  cognitiveScore: number;
  operationalScore: number;
  strategicScore: number;
  livingSystemsScore: number;
  wasteEstimate: number;
  costOptimizationPotential: number;
  roiProjection: number;
}
