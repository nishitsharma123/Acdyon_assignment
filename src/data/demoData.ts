export interface SourceItem {
  id: string;
  title: string;
  type: 'pdf' | 'web' | 'notes';
  pagesOrWords: string;
  extractedClaims: number;
  snippet: string;
  highlights: { text: string; label: string; confidence: string }[];
}

export interface ResearchDataset {
  id: string;
  name: string;
  category: string;
  sourcesCount: number;
  claimsCount: number;
  sources: SourceItem[];
  brief: {
    title: string;
    summary: string;
    keyFindings: { heading: string; detail: string; sourceRef: string }[];
    synthesisNote: string;
    confidenceScore: number;
  };
}

export const DEMO_DATASETS: ResearchDataset[] = [
  {
    id: 'market-analysis',
    name: 'Q3 Enterprise AI Adoption Index',
    category: 'Market Research',
    sourcesCount: 4,
    claimsCount: 18,
    sources: [
      {
        id: 'src-1',
        title: 'McKinsey_State_of_AI_2026.pdf',
        type: 'pdf',
        pagesOrWords: '42 pages',
        extractedClaims: 8,
        snippet: '67% of enterprise organizations report deploying generative models in core operational workflows, up from 44% in 2024. Main bottleneck remains data governance and citation auditing.',
        highlights: [
          { text: '67% of enterprise organizations report deploying generative models', label: 'Adoption Rate', confidence: '99.4%' },
          { text: 'Main bottleneck remains data governance and citation auditing', label: 'Primary Risk', confidence: '98.1%' }
        ]
      },
      {
        id: 'src-2',
        title: 'Gartner_Hype_Cycle_Infrastructure.web',
        type: 'web',
        pagesOrWords: '1,840 words',
        extractedClaims: 5,
        snippet: 'Vector indexing overhead drops 3x when paired with hybrid sparse-dense retrieval architectures. Multi-modal synthesis engines are outperforming fine-tuned monolithic LLMs.',
        highlights: [
          { text: 'Vector indexing overhead drops 3x', label: 'Cost Efficiency', confidence: '97.6%' }
        ]
      },
      {
        id: 'src-3',
        title: 'Chief_Data_Officer_Interviews.notes',
        type: 'notes',
        pagesOrWords: '12 transcript pages',
        extractedClaims: 5,
        snippet: 'Enterprises demand strict deterministic attribution: every output paragraph must hyperlink directly to source paragraph IDs.',
        highlights: [
          { text: 'every output paragraph must hyperlink directly to source paragraph IDs', label: 'User Requirement', confidence: '100%' }
        ]
      }
    ],
    brief: {
      title: 'Executive Brief: Enterprise AI Deployment Dynamics',
      summary: 'Enterprise AI adoption reached a tipping point in 2026, driven by hybrid indexing architectures that lower vector costs by 3x. However, enterprise buyers refuse un-cited syntheses, elevating deterministic source attribution to a core security requirement.',
      keyFindings: [
        {
          heading: 'Widespread Operational Integration',
          detail: '67% of enterprise firms now run LLM workloads in core production pipelines (up 23% YoY).',
          sourceRef: 'McKinsey_State_of_AI_2026.pdf (p. 14)'
        },
        {
          heading: 'Retrieval Cost Breakthroughs',
          detail: 'Hybrid sparse-dense indexing reduced vector storage overhead by 3x while boosting precision scores.',
          sourceRef: 'Gartner_Hype_Cycle_Infrastructure.web'
        },
        {
          heading: 'Mandatory Attribution Lineage',
          detail: 'CDOs consistently prioritize exact paragraph-level source linking over model parameter size.',
          sourceRef: 'Chief_Data_Officer_Interviews.notes (L. 84)'
        }
      ],
      synthesisNote: 'Generated automatically from 4 parsed documents. Zero hallucinations detected.',
      confidenceScore: 98.8
    }
  },
  {
    id: 'clinical-trial',
    name: 'Oncology Phase II Biomarker Protocol',
    category: 'Biomedical & Clinical',
    sourcesCount: 5,
    claimsCount: 24,
    sources: [
      {
        id: 'src-4',
        title: 'NEJM_Biomarker_Efficacy_Trial.pdf',
        type: 'pdf',
        pagesOrWords: '28 pages',
        extractedClaims: 11,
        snippet: 'Patient cohort expressing KRAS-G12C mutations demonstrated a 41.2% overall response rate (ORR) when administered dual-inhibitor therapy in combination with immunotherapy.',
        highlights: [
          { text: '41.2% overall response rate (ORR)', label: 'Efficacy Metric', confidence: '99.9%' },
          { text: 'KRAS-G12C mutations', label: 'Target Biomarker', confidence: '99.7%' }
        ]
      },
      {
        id: 'src-5',
        title: 'FDA_Guidance_Combination_Therapies.pdf',
        type: 'pdf',
        pagesOrWords: '54 pages',
        extractedClaims: 7,
        snippet: 'Accelerated approval pathways require real-time pharmacodynamic tracking and transparent adverse event logging across all trial sites.',
        highlights: [
          { text: 'Accelerated approval pathways require real-time pharmacodynamic tracking', label: 'Regulatory Mandate', confidence: '99.1%' }
        ]
      }
    ],
    brief: {
      title: 'Synthesis: Phase II KRAS-G12C Combination Trial Protocol',
      summary: 'Combination inhibitor-immunotherapy protocol exhibits statistically significant 41.2% ORR in targeted KRAS-G12C cohorts. Regulatory compliance mandates continuous pharmacodynamic telemetry across all active trial centers.',
      keyFindings: [
        {
          heading: 'Target Response Validation',
          detail: '41.2% ORR observed in targeted patient group, exceeding baseline single-agent benchmarks by 18%.',
          sourceRef: 'NEJM_Biomarker_Efficacy_Trial.pdf (p. 8)'
        },
        {
          heading: 'Regulatory Submission Alignment',
          detail: 'FDA guidance mandates real-time telemetry pipelines for accelerated Phase III authorization.',
          sourceRef: 'FDA_Guidance_Combination_Therapies.pdf (p. 22)'
        }
      ],
      synthesisNote: 'Verified against 5 clinical documents with 99.5% citation accuracy.',
      confidenceScore: 99.5
    }
  },
  {
    id: 'system-arch',
    name: 'Distributed Engine Architecture Spec',
    category: 'Engineering & Systems',
    sourcesCount: 3,
    claimsCount: 14,
    sources: [
      {
        id: 'src-6',
        title: 'RFC_8892_Distributed_Consensus.pdf',
        type: 'pdf',
        pagesOrWords: '19 pages',
        extractedClaims: 6,
        snippet: 'Optimistic consensus validation yields sub-15ms quorum confirmations under low network jitter conditions.',
        highlights: [
          { text: 'sub-15ms quorum confirmations', label: 'Latency Benchmark', confidence: '98.5%' }
        ]
      },
      {
        id: 'src-7',
        title: 'Zero_Knowledge_Proof_Benchmarks.web',
        type: 'web',
        pagesOrWords: '2,400 words',
        extractedClaims: 8,
        snippet: 'STARK prover memory footprint decreased 60% with recursive folding schemes, enabling client-side verification on mobile hardware.',
        highlights: [
          { text: 'memory footprint decreased 60%', label: 'Optimization', confidence: '99.2%' }
        ]
      }
    ],
    brief: {
      title: 'Technical Brief: Distributed High-Throughput Verification Engine',
      summary: 'Merging optimistic consensus protocols with recursive STARK folding yields sub-15ms quorum latency and enables zero-trust client-side verification even on mobile devices.',
      keyFindings: [
        {
          heading: 'Sub-15ms Consensus Latency',
          detail: 'Optimistic validation guarantees low-overhead transaction sequencing under standard network topology.',
          sourceRef: 'RFC_8892_Distributed_Consensus.pdf (p. 4)'
        },
        {
          heading: 'Client-Side ZK Verification',
          detail: '60% memory reduction permits instant in-browser proof checking without remote server dependency.',
          sourceRef: 'Zero_Knowledge_Proof_Benchmarks.web'
        }
      ],
      synthesisNote: 'Parsed across distributed systems literature. 100% deterministic source map.',
      confidenceScore: 99.1
    }
  }
];
