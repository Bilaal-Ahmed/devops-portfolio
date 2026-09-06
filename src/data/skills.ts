export type SkillGroup = { category: string; icon: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
	{ category: "Cloud", icon: "cloud", skills: ["AWS", "EC2", "S3", "IAM"] }, { category: "Containers", icon: "container", skills: ["Docker"] }, { category: "Kubernetes", icon: "cluster", skills: ["Kubernetes", "Kind", "k3s"] }, { category: "CI/CD", icon: "workflow", skills: ["GitHub Actions"] }, { category: "Infrastructure as Code", icon: "code", skills: ["Terraform"] }, { category: "Deployment", icon: "ship", skills: ["Helm", "Traefik"] }, { category: "Observability", icon: "chart", skills: ["Prometheus", "Grafana", "PromQL"] }, { category: "Linux", icon: "terminal", skills: ["Ubuntu", "Bash", "SSH"] }, { category: "Security", icon: "shield", skills: ["RBAC", "NetworkPolicy", "Container security"] }, { category: "Development", icon: "braces", skills: ["Python", "FastAPI", "React", "TypeScript", "JavaScript"] },
];
