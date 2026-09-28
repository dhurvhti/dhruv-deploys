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
];

export const experience = [
  {
    range: "Jan 2025 — Present",
    company: "Hashtech Innovations",
    location: "Ahmedabad, Gujarat",
    title: "DevOps Engineer — SRE",
    tags: ["CI/CD", "CLOUD INFRA", "IAC"],
    bullets: [
      { pre: "Designed and implemented end-to-end ", bold: "CI/CD pipelines", post: " using GitHub Actions, Jenkins, and AWS CodePipeline to automate application build and deployment." },
      { pre: "Provisioned and managed cloud infrastructure using ", bold: "Terraform", post: " — EC2 instances, VPC, security groups, IAM roles, and networking components." },
      { pre: "Built ", bold: "modular, reusable Infrastructure as Code", post: " architecture for consistent provisioning across environments." },
      { pre: "Configured and managed ", bold: "Nginx and Apache", post: " as reverse proxy and web servers for application deployment." },
    ],
  },
];

export const projects = [
  {
    index: "01",
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
];

export const toolchain = [
  { group: "CLOUD", color: "var(--accent)", items: ["AWS", "Azure"] },
  {
    group: "INFRASTRUCTURE & CI/CD",
    color: "#e79a72",
    items: ["Terraform", "Docker", "Kubernetes", "GitHub Actions", "AWS CodePipeline", "Jenkins"],
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
