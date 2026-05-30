import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "../context/ThemeContext";

const GithubCalender = () => {
  const { resolvedTheme } = useTheme();
  return (
    <section className="py-8 border-b border-zinc-300 dark:border-zinc-800">
      <h2 className="pl-5 py-1.5 font-semibold text-xl border-b border-t border-zinc-300 dark:border-zinc-800">
        Github Contributions
      </h2>
      <div>
        <GitHubCalendar
          username="amritasrc"
          colorScheme={resolvedTheme}
          fontSize={13}
          blockSize={12}
          blockMargin={4}
          showWeekdayLabels
          theme={{
            light: ["#ffffff", "#b7efc5", "#4ade80", "#22c55e", "#166534"],
            dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
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
