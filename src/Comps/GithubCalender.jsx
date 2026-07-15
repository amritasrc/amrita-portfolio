import React from "react";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";

const GithubCalendar = () => {
  const { theme } = useTheme();


  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col gap-2 md:gap-4"
      id="github"
    >
      <h2 className="text-xl text-center uppercase tracking-[0.2em] text-zinc-700 dark:text-zinc-300 font-semibold mb-8">
        GitHub Contributions
      </h2>

      <div className="overflow-x-auto pb-2">
          <GitHubCalendar
            username="amritasrc"
            colorScheme={theme}
            blockSize={isMobile ? 8 : 12}
            blockMargin={isMobile ? 2 : 4}
            fontSize={isMobile ? 10 : 13}
            showWeekdayLabels
            theme={{
              light: [
                "#ffffff",
                "#bfdbfe",
                "#60a5fa",
                "#3b82f6",
                "#1d4ed8",
              ],
              dark: [
                "#0f172a",
                "#1e3a8a",
                "#2563eb",
                "#3b82f6",
                "#93c5fd",
              ],
            }}
            labels={{
              totalCount: "{{count}} contributions in the last year",
            }}
          />
        </div>
    </motion.section>
  );
};

export default GithubCalendar;