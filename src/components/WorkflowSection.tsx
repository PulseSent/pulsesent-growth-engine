import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface WorkflowNode {
  id: string;
  label: string;
  icon: string;
  x: number;
  y: number;
}

interface WorkflowEdge {
  from: string;
  to: string;
}

interface WorkflowTab {
  id: string;
  title: string;
  description: string;
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
}

const tabs: WorkflowTab[] = [
  {
    id: "lead",
    title: "Lead Generation Pipeline",
    description:
      "A new lead submits a form at 2am. By 2:01am, they're qualified, in your CRM, and have received a personalized follow-up — automatically.",
    nodes: [
      { id: "a1", label: "New Lead Form", icon: "📋", x: 60, y: 140 },
      { id: "a2", label: "AI Qualifier", icon: "🤖", x: 240, y: 140 },
      { id: "a3", label: "CRM Entry", icon: "💾", x: 420, y: 140 },
      { id: "a4", label: "Follow-Up Email", icon: "✉️", x: 600, y: 140 },
      { id: "a5", label: "SMS Reminder", icon: "📱", x: 780, y: 140 },
      { id: "a6", label: "Booked Call ✓", icon: "📅", x: 960, y: 140 },
    ],
    edges: [
      { from: "a1", to: "a2" },
      { from: "a2", to: "a3" },
      { from: "a3", to: "a4" },
      { from: "a4", to: "a5" },
      { from: "a5", to: "a6" },
    ],
  },
  {
    id: "support",
    title: "Customer Support Automation",
    description:
      "Your AI handles 80% of questions instantly. The other 20% gets routed to the right person — automatically.",
    nodes: [
      { id: "b1", label: "Customer Message", icon: "💬", x: 60, y: 140 },
      { id: "b2", label: "AI Intent Detect", icon: "🧠", x: 240, y: 140 },
      { id: "b3", label: "FAQ Auto-Answer", icon: "⚡", x: 420, y: 70 },
      { id: "b4", label: "Route to Human", icon: "👤", x: 420, y: 210 },
      { id: "b5", label: "Ticket Logged", icon: "🎫", x: 620, y: 140 },
      { id: "b6", label: "Follow-Up Sent", icon: "📧", x: 800, y: 140 },
      { id: "b7", label: "Resolved ✓", icon: "✅", x: 960, y: 140 },
    ],
    edges: [
      { from: "b1", to: "b2" },
      { from: "b2", to: "b3" },
      { from: "b2", to: "b4" },
      { from: "b3", to: "b5" },
      { from: "b4", to: "b5" },
      { from: "b5", to: "b6" },
      { from: "b6", to: "b7" },
    ],
  },
];

const NODE_W = 130;
const NODE_H = 50;

function getNodeCenter(node: WorkflowNode) {
  return { cx: node.x + NODE_W / 2, cy: node.y + NODE_H / 2 };
}

function PulseDot({
  x1,
  y1,
  x2,
  y2,
  delay,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
}) {
  return (
    <circle r="3" fill="white" opacity="0">
      <animate
        attributeName="cx"
        from={x1}
        to={x2}
        dur="2s"
        begin={`${delay}s`}
        repeatCount="indefinite"
      />
      <animate
        attributeName="cy"
        from={y1}
        to={y2}
        dur="2s"
        begin={`${delay}s`}
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0;1;1;0"
        keyTimes="0;0.1;0.8;1"
        dur="2s"
        begin={`${delay}s`}
        repeatCount="indefinite"
      />
    </circle>
  );
}

function WorkflowCanvas({ tab }: { tab: WorkflowTab }) {
  const nodeMap = Object.fromEntries(tab.nodes.map((n) => [n.id, n]));
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const intervalRef = useRef<number | null>(null);

  // Cycle through nodes to show pulse highlighting
  useEffect(() => {
    let idx = 0;
    intervalRef.current = window.setInterval(() => {
      setActiveNode(tab.nodes[idx % tab.nodes.length].id);
      idx++;
    }, 800);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [tab]);

  const svgWidth = 1100;
  const svgHeight = 300;

  return (
    <div className="overflow-x-auto">
      <svg
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="w-full min-w-[700px]"
        style={{ height: "auto" }}
      >
        {/* Edges */}
        {tab.edges.map((edge, i) => {
          const from = getNodeCenter(nodeMap[edge.from]);
          const to = getNodeCenter(nodeMap[edge.to]);
          return (
            <g key={`edge-${i}`}>
              <line
                x1={from.cx}
                y1={from.cy}
                x2={to.cx}
                y2={to.cy}
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1.5"
              />
              <PulseDot
                x1={from.cx}
                y1={from.cy}
                x2={to.cx}
                y2={to.cy}
                delay={i * 0.35}
              />
            </g>
          );
        })}

        {/* Nodes */}
        {tab.nodes.map((node) => {
          const isActive = activeNode === node.id;
          return (
            <g key={node.id}>
              <rect
                x={node.x}
                y={node.y}
                width={NODE_W}
                height={NODE_H}
                rx="8"
                fill="rgba(255,255,255,0.03)"
                stroke={
                  isActive
                    ? "rgba(255,255,255,0.7)"
                    : "rgba(255,255,255,0.15)"
                }
                strokeWidth={isActive ? 1.5 : 1}
                style={{
                  transition: "stroke 0.3s, transform 0.3s",
                  transformOrigin: `${node.x + NODE_W / 2}px ${node.y + NODE_H / 2}px`,
                  transform: isActive ? "scale(1.03)" : "scale(1)",
                }}
              />
              <text
                x={node.x + 12}
                y={node.y + NODE_H / 2 + 1}
                fontSize="14"
                dominantBaseline="middle"
              >
                {node.icon}
              </text>
              <text
                x={node.x + 32}
                y={node.y + NODE_H / 2 + 1}
                fill="rgba(255,255,255,0.8)"
                fontSize="11"
                fontFamily="Inter, sans-serif"
                dominantBaseline="middle"
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

const WorkflowSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            See It In Action
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Real automation workflows — built on platforms like n8n & Make.com, tailored to your business.
          </p>
        </motion.div>

        {/* Tab buttons */}
        <div className="flex gap-3 justify-center mb-8">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 border ${
                activeTab === i
                  ? "border-foreground/40 bg-foreground/10 text-foreground"
                  : "border-foreground/10 text-muted-foreground hover:border-foreground/20"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Canvas */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="glow-card grid-dots p-6 md:p-8"
        >
          <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
            {tabs[activeTab].description}
          </p>

          <WorkflowCanvas tab={tabs[activeTab]} />

          <p className="text-xs text-muted-foreground/40 mt-6 text-right">
            n8n / Make.com compatible
          </p>
        </motion.div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Every workflow is custom-built for your business. No templates. No shortcuts.
        </p>
      </div>
    </section>
  );
};

export default WorkflowSection;
