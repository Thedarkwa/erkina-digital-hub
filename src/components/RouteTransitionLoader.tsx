import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

export function RouteTransitionLoader() {
  const isLoading = useRouterState({
    select: (s) => s.isLoading || s.isTransitioning,
  });
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf: number | undefined;
    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (isLoading) {
      setVisible(true);
      setProgress(8);
      const tick = () => {
        setProgress((p) => {
          if (p >= 90) return p;
          // ease toward 90
          return p + Math.max(0.5, (90 - p) * 0.04);
        });
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    } else if (visible) {
      setProgress(100);
      timeout = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 250);
    }

    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (timeout) clearTimeout(timeout);
    };
  }, [isLoading, visible]);

  return (
    <>
      {/* Top progress bar */}
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-[3px]"
        aria-hidden={!visible}
      >
        <div
          className="h-full bg-gradient-gold shadow-gold transition-[width,opacity] duration-200 ease-out"
          style={{
            width: `${progress}%`,
            opacity: visible ? 1 : 0,
          }}
        />
      </div>

      {/* Centered spinner overlay (only on longer loads) */}
      {visible && progress < 95 && (
        <div className="pointer-events-none fixed bottom-6 right-6 z-[100] animate-fade-in">
          <div className="flex items-center gap-3 rounded-full border border-border bg-background/90 px-4 py-2 shadow-elegant backdrop-blur">
            <span className="relative flex h-4 w-4">
              <span className="absolute inset-0 animate-ping rounded-full bg-gold/40" />
              <span className="relative h-4 w-4 rounded-full border-2 border-gold border-t-transparent animate-spin" />
            </span>
            <span className="text-xs font-medium text-foreground/80">Loading…</span>
          </div>
        </div>
      )}
    </>
  );
}
