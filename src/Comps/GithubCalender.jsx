import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "../context/ThemeContext";

const GithubCalender = () => {
  const { theme } = useTheme();
  return (
    <section className="py-8 border-b border-zinc-300 dark:border-zinc-800">
      <h2 className="pl-5 py-1.5 font-semibold text-xl border-b border-t border-zinc-300 dark:border-zinc-800">
        Github Contributions
      </h2>
      <div>
        <GitHubCalendar
          username="amritasrc"
          colorScheme={theme}
          fontSize={13}
          blockSize={12}
          blockMargin={4}
          showWeekdayLabels
          theme={{
  light: ["#ffffff", "#bfdbfe", "#60a5fa", "#3b82f6", "#1d4ed8"],
  dark: ["#0f172a", "#1e3a8a", "#2563eb", "#3b82f6", "#93c5fd"],
}}
          labels={{
            totalCount: "{{count}} contributions in the last year",
          }}
          style={{
            margin: "0 auto",
          }}
        />
      </div>
    </section>
  );
};

export default GithubCalender;
