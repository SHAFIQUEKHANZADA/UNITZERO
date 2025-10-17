import type { PropsWithChildren, ReactNode } from "react";

type CalloutType = "info" | "warning" | "success" | "note";

type CalloutProps = PropsWithChildren<{
  type?: CalloutType;
  title?: ReactNode;
}>;

const typeToClasses: Record<CalloutType, { border: string; bg: string; text: string; icon: string; label: string }> = {
  info:    { border: "border-sky-400/40", bg: "bg-sky-400/10", text: "text-sky-200", icon: "text-sky-300", label: "Info" },
  warning: { border: "border-amber-400/40", bg: "bg-amber-400/10", text: "text-amber-100", icon: "text-amber-300", label: "Warning" },
  success: { border: "border-emerald-400/40", bg: "bg-emerald-400/10", text: "text-emerald-100", icon: "text-emerald-300", label: "Success" },
  note:    { border: "border-zinc-400/30", bg: "bg-zinc-400/10", text: "text-zinc-100", icon: "text-zinc-300", label: "Note" },
};

export default function Callout({ type = "note", title, children }: CalloutProps) {
  const c = typeToClasses[type];
  return (
    <div className={`not-prose my-6 rounded-xl border ${c.border} ${c.bg} p-4`}> 
      {title || type ? (
        <div className={`mb-2 text-xs font-semibold uppercase tracking-wide ${c.icon}`}>{title ?? c.label}</div>
      ) : null}
      <div className={`text-sm leading-6 ${c.text}`}>{children}</div>
    </div>
  );
}


