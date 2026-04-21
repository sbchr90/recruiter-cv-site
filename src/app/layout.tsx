import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sven Becher | Specialist Solutions Architect (Principal-Level)",
  description:
    "Recruiter-focused portfolio for Sven Becher, Specialist Solutions Architect (Principal-Level) with strengths in zero trust, AI security, and agent-assisted solution engineering.",
  openGraph: {
    title: "Sven Becher | Specialist Solutions Architect (Principal-Level)",
    description: "A concise view of zero trust, AI security, coding-agent workflows, and measurable customer outcomes."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
