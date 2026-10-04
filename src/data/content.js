export const profile = {
  name: "Dhruv Khalasi",
  role: "DevOps Engineer",
  location: "Ahmedabad, Gujarat",
  email: "dhruvsrt1503@gmail.com",
  phone: "+91 8799448289",
  linkedin: "https://www.linkedin.com/in/dhruv-khalasi",
  about:
    "DevOps Engineer focused on automating infrastructure, building reliable CI/CD pipelines, and deploying scalable applications in cloud environments. Skilled in AWS, Azure, Docker, Kubernetes, and Terraform, with strong expertise in Linux and Infrastructure as Code.",
};

export const stats = [
  { value: "8.52", suffix: "/10", label: "CGPA — B.Tech Information Technology" },
  { value: "3", suffix: "", label: "Infra projects shipped end-to-end" },
  { value: "2", suffix: "", label: "Clouds in production — AWS & Azure" },
];

export const marqueeWords = [
  "Terraform",
  "AWS",
  "Kubernetes",
  "Docker",
  "GitHub Actions",
  "Azure",
  "Prometheus",
  "Grafana",
  "Jenkins",
  "Linux",
  "Knative",
  "OpenTelemetry",
];

export const experience = [
  {
    range: "Jan 2025 — Present",
    company: "Hashtech Innovations",
    location: "Ahmedabad, Gujarat",
    title: "DevOps Engineer — SRE",
    tags: ["CI/CD", "CLOUD INFRA", "IAC", "GENAI"],
    bullets: [
      { pre: "Provisioned ", bold: "isolated dev and prod cloud environments", post: " with Terraform, wired to automated deployment pipelines." },
      { pre: "Built ", bold: "reusable Terraform modules", post: " for EC2, VPC, subnets, and security groups to version AWS infrastructure provisioning." },
      { pre: "Deployed containerized workloads to ", bold: "Kubernetes", post: " with Prometheus, Grafana, and Node Exporter for full observability." },
      { pre: "Configured ", bold: "Istio", post: " for weighted canary traffic splitting, mutual TLS, and fault-injection resilience testing." },
      { pre: "Deployed a Flask service on ", bold: "Knative", post: " with scale-to-zero autoscaling for serverless economics on Kubernetes." },
      { pre: "Built ", bold: "toggleable Terraform modules", post: " for AKS, ACR, Storage, and Log Analytics on Azure, controlled via GitHub Actions dispatch inputs." },
      { pre: "Built a ", bold: "GenAI on-call assistant", post: " on AWS Bedrock AgentCore that correlates alerts, tickets, and status-page signals to recommend incident root causes." },
      { pre: "Built a ", bold: "suite of production MCP servers", post: " and a skill-based workflow framework that expose incident-management and status-page tools to AI agents." },
    ],
  },
];

export const projects = [
  {
    index: "01",
    featured: true,
    eyebrow: "CLOUD · ENVIRONMENTS",
    title: "Multi-Environment Cloud Infrastructure",
    description:
      "Isolated development and production environments provisioned with Terraform, wired to automated deployment pipelines so releases ship safely to the right environment every time.",
    tags: ["AWS", "Terraform", "GitHub Actions", "Linux"],
    tiles: [
      { label: "WORKSPACES", value: "Isolated by environment", kind: "a" },
      { label: "RELEASES", value: "Zero cross-env drift", kind: "b" },
      { label: "PIPELINES", value: "Automated CI/CD to prod", kind: "big-a" },
    ],
  },
  {
    index: "02",
    eyebrow: "INFRASTRUCTURE AS CODE",
    title: "Infrastructure Automation using Terraform",
    description:
      "Reusable Terraform modules for EC2, VPC, subnets, and security groups — turning full AWS infrastructure provisioning into versioned configuration instead of manual console work.",
    tags: ["Terraform", "AWS EC2", "VPC", "IAM", "GitHub"],
    tiles: [
      { label: "MODULES", value: "Reusable EC2 + VPC", kind: "a" },
      { label: "ENVIRONMENTS", value: "Dev & prod separated", kind: "b" },
      { label: "WORKFLOW", value: "Terraform + GitHub CI", kind: "big-b" },
    ],
  },
  {
    index: "03",
    featured: true,
    eyebrow: "KUBERNETES · OBSERVABILITY",
    title: "Kubernetes Deployment & Monitoring",
    description:
      "Containerized applications deployed to Kubernetes with full observability — Prometheus scraping metrics, Node Exporter watching system health, and Grafana dashboards for real-time visibility.",
    tags: ["Kubernetes", "Docker", "Prometheus", "Grafana", "Node Exporter"],
    tiles: [
      { label: "WORKLOADS", value: "Deployments, Services, Pods", kind: "a" },
      { label: "METRICS", value: "CPU, memory, disk", kind: "b" },
      { label: "DASHBOARDS", value: "Real-time in Grafana", kind: "big-a" },
    ],
  },
  {
    index: "04",
    eyebrow: "SERVICE MESH · ISTIO",
    title: "Service Mesh Traffic Management with Istio",
    description:
      "Istio ingress gateway routing cluster traffic through a weighted canary split between service versions, with mutual TLS enforced between workloads and fault injection used to prove out retry and timeout behavior under failure.",
    tags: ["Istio", "Kubernetes", "mTLS", "Canary Deployments"],
    tiles: [
      { label: "TRAFFIC SPLIT", value: "80/20 canary across v1/v2", kind: "a" },
      { label: "SECURITY", value: "mTLS enforced service-to-service", kind: "b" },
      { label: "RESILIENCE", value: "Fault injection + 3x retries on 5xx", kind: "big-a" },
    ],
  },
  {
    index: "05",
    eyebrow: "SERVERLESS · KNATIVE",
    title: "Scale-to-Zero Serverless Workloads on Knative",
    description:
      "A Flask app containerized and shipped to Docker Hub, then deployed as a Knative Service that scales down to zero when idle and autoscales back up under load — serverless economics on top of a standard Kubernetes cluster.",
    tags: ["Knative", "Kubernetes", "Flask", "Docker", "Serverless"],
    tiles: [
      { label: "AUTOSCALING", value: "0 → 5 replicas on demand", kind: "a" },
      { label: "COLD START", value: "Scale-to-zero when idle", kind: "b" },
      { label: "DELIVERY", value: "Custom image on Docker Hub", kind: "big-b" },
    ],
  },
  {
    index: "06",
    eyebrow: "AZURE · INFRASTRUCTURE AS CODE",
    title: "Modular Azure Infrastructure with On-Demand Provisioning",
    description:
      "Toggleable Terraform modules for AKS, ACR, Storage, and Log Analytics on Azure, planned through a GitHub Actions workflow where every resource can be switched on or off per run via dispatch inputs instead of editing code.",
    tags: ["Azure", "Terraform", "AKS", "GitHub Actions", "ACR"],
    tiles: [
      { label: "MODULES", value: "AKS, ACR, Storage, Log Analytics", kind: "a" },
      { label: "CONTROL", value: "Per-resource on/off via dispatch", kind: "b" },
      { label: "PIPELINE", value: "Plan-only Terraform in CI", kind: "big-a" },
    ],
  },
  {
    index: "07",
    featured: true,
    eyebrow: "GENAI · INCIDENT RESPONSE",
    title: "GenAI On-Call Assistant for Incident Triage",
    description:
      "An AI agent built on AWS Bedrock AgentCore that triages production incidents end-to-end — pulling alert context, historical tickets, and status-page signals through MCP tool calls, correlating them with recent deployments, and proposing a root cause and remediation for an engineer to approve before anything runs.",
    tags: ["AWS Bedrock AgentCore", "GenAI Agents", "MCP", "Incident Response"],
    tiles: [
      { label: "CORRELATION", value: "Alerts + tickets + status + deploys", kind: "a" },
      { label: "GUARDRAILS", value: "Human approval before remediation", kind: "b" },
      { label: "OUTPUT", value: "Root-cause hypothesis + recommended fix", kind: "big-a" },
    ],
  },
  {
    index: "08",
    featured: true,
    eyebrow: "MCP · SRE PLATFORM",
    title: "MCP Server Suite & Skill-Based SRE Workflow Orchestration",
    description:
      "Production MCP servers exposing an incident-management platform and a status-page provider as AI-callable tools — each running identically from a local dev server or an AWS Lambda behind Bedrock AgentCore Gateway — plus a slash-command skill framework that turns static runbooks into guarded, executable workflows.",
    tags: ["MCP", "AWS Lambda", "Terraform", "GitHub Actions", "Python"],
    tiles: [
      { label: "SERVERS", value: "2 MCP servers, local + Lambda runtime", kind: "a" },
      { label: "PIPELINE", value: "Terraform-gated dev → stage → prod", kind: "b" },
      { label: "WORKFLOWS", value: "Runbooks as guarded slash-command skills", kind: "big-b" },
    ],
  },
];

export const toolchain = [
  { group: "CLOUD", color: "var(--accent)", items: ["AWS", "Azure"] },
  {
    group: "INFRASTRUCTURE & CI/CD",
    color: "#e79a72",
    items: [
      "Terraform",
      "Docker",
      "Kubernetes",
      "Istio",
      "Knative",
      "GitHub Actions",
      "AWS CodePipeline",
      "Jenkins",
      "AWS Lambda",
      "AWS Bedrock AgentCore",
      "MCP",
    ],
  },
  {
    group: "OBSERVABILITY",
    color: "#6ea88a",
    items: ["Prometheus", "Grafana", "Node Exporter", "Azure Monitor", "OpenTelemetry"],
  },
  { group: "OS & WEB SERVERS", color: "#8b8fa3", items: ["Linux", "Windows", "Nginx", "Apache"] },
];

export const education = {
  school: "CHARUSAT University",
  location: "Anand, Gujarat",
  degree: "Bachelor of Technology, Information Technology",
  date: "May 2025",
  cgpa: 8.52,
};

export const focusAreas = [
  "Improving deployment efficiency and release automation",
  "System reliability and observability with Prometheus, Grafana & OpenTelemetry",
  "Scaling Infrastructure as Code practices across environments",
];
