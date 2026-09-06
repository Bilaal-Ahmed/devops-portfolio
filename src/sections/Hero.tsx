import { ArrowDown, GitBranch, Terminal, Activity } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-73px)] items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-6 py-24 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <p className="mb-5 font-mono text-sm text-cyan-400">
            $ whoami
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
            Bilal Ahmed
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-gray-300 sm:text-3xl">
            DevOps Engineer
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-400">
            Cloud & DevSecOps <span>·</span> Kubernetes <span>·</span> CI/CD <span>·</span> Infrastructure <span>·</span> Observability
          </p>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-500">
            I build, automate, deploy, and monitor cloud-native infrastructure
            with a focus on reliability, security, and continuous delivery.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-medium text-[#0d1117] transition hover:bg-cyan-300"
            >
              View Projects
              <ArrowDown size={18} />
            </a>

            <a
              href="https://github.com/Bilaal-Ahmed"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 font-medium text-gray-200 transition hover:border-cyan-400/50 hover:text-cyan-400"
            >
              <GitBranch size={18} />
              GitHub
            </a>
          </div>

          <div className="mt-12 flex items-center gap-3 font-mono text-xs text-gray-600">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Open to DevOps opportunities
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="hero-console"><div className="console-header"><span><i /> <i /> <i /></span><small>bilal@devops: ~/portfolio</small><Terminal size={15} /></div><div className="console-body"><p><span className="prompt">$</span> kubectl get systems</p><div className="console-table"><span>NAME</span><span>STATUS</span><span>FOCUS</span><strong>cloud-infra</strong><em>ready</em><strong>kubernetes</strong><em>ready</em><strong>observability</strong><em>ready</em></div><p className="console-cursor"><span className="prompt">$</span> <b>build</b> reliability --continuous</p></div><div className="console-footer"><Activity size={14} /> pipeline health <span>100%</span></div></motion.div>
      </div>
    </section>
  );
}