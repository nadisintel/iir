import { AssessmentResponse, ScoreResult } from '../types/assessment';

export function calculateScore(responses: AssessmentResponse): ScoreResult {
  // Calculate individual symbiosis scores (average of responses)
  const cognitiveScore = Math.round(
    (responses.cognitive.decisionMaking +
      responses.cognitive.intelligenceAccess +
      responses.cognitive.decisionLatency +
      responses.cognitive.insightQuality +
      responses.cognitive.cognitiveLoad) / 5
  );

  const operationalScore = Math.round(
    (responses.operational.processAutomation +
      responses.operational.toolIntegration +
      responses.operational.operationalEfficiency +
      responses.operational.dailyUsage +
      responses.operational.wasteReduction +
      responses.operational.workflowCoherence) / 6
  );

  const strategicScore = Math.round(
    (responses.strategic.strategyAlignment +
      responses.strategic.competitiveIntelligence +
      responses.strategic.innovationVelocity +
      responses.strategic.roiAchievement +
      responses.strategic.strategicDifferentiation) / 5
  );

  const livingSystemsScore = Math.round(
    (responses.livingSystems.infrastructureLearning +
      responses.livingSystems.systemResilience +
      responses.livingSystems.humanAiCollaboration +
      responses.livingSystems.unexpectedValue +
      responses.livingSystems.adaptationCapability) / 5
  );

  // Weighted total score (Cognitive 30%, Operational 30%, Strategic 30%, Living Systems 10%)
  const totalScore = Math.round(
    cognitiveScore * 0.3 +
    operationalScore * 0.3 +
    strategicScore * 0.3 +
    livingSystemsScore * 0.1
  );

  // Determine maturity level
  let maturityLevel: ScoreResult['maturityLevel'];
  let maturityLabel: string;
  let maturityEmoji: string;

  if (totalScore <= 20) {
    maturityLevel = 'fragmented';
    maturityLabel = 'Fragmented Infrastructure';
    maturityEmoji = '🔴';
  } else if (totalScore <= 40) {
    maturityLevel = 'emerging';
    maturityLabel = 'Emerging Infrastructure';
    maturityEmoji = '🟠';
  } else if (totalScore <= 60) {
    maturityLevel = 'developing';
    maturityLabel = 'Developing Infrastructure';
    maturityEmoji = '🟡';
  } else if (totalScore <= 80) {
    maturityLevel = 'maturing';
    maturityLabel = 'Maturing Infrastructure';
    maturityEmoji = '🔵';
  } else {
    maturityLevel = 'living';
    maturityLabel = 'Living Infrastructure™';
    maturityEmoji = '🟢';
  }

  // Calculate waste estimate and cost optimization based on monthly spend and score
  const monthlySpendMap: { [key: string]: number } = {
    '<$1,000': 750,
    '$1,000-$5,000': 3000,
    '$5,000-$10,000': 7500,
    '$10,000-$25,000': 17500,
    '$25,000+': 35000,
  };

  const monthlySpend = monthlySpendMap[responses.organizationContext.monthlySpend] || 3000;
  
  // Lower scores = higher waste percentage (inverse relationship)
  const wastePercentage = Math.max(10, Math.min(60, 60 - (totalScore * 0.5)));
  const wasteEstimate = Math.round((monthlySpend * 12 * wastePercentage) / 100);
  
  // Cost optimization potential (30-50% of waste can be recovered)
  const costOptimizationPotential = Math.round(wasteEstimate * 0.4);
  
  // ROI projection (3-5x return on optimization)
  const roiProjection = costOptimizationPotential * 4;

  return {
    totalScore,
    maturityLevel,
    maturityLabel,
    maturityEmoji,
    cognitiveScore,
    operationalScore,
    strategicScore,
    livingSystemsScore,
    wasteEstimate,
    costOptimizationPotential,
    roiProjection,
  };
}

export function getMaturityDescription(level: ScoreResult['maturityLevel']): string {
  const descriptions = {
    fragmented: 'Disconnected tools with no coherence. High waste and operational inefficiency. Critical intervention required.',
    emerging: 'Some connections forming between systems. Early integration and basic automation. Foundation building phase.',
    developing: 'Integration patterns emerging with clear progress. Workflow optimization showing measurable results. Systematic improvement phase.',
    maturing: 'Strong symbiosis across three pillars. Living characteristics beginning to appear. Advanced optimization and innovation phase.',
    living: 'Full symbiosis active across organization. Self-evolving and adaptive systems. Competitive advantage through infrastructure excellence.',
  };

  return descriptions[level];
}
