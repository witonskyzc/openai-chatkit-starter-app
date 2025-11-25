"use client";

import { useCallback, useMemo } from "react";
import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";
import type { ColorScheme } from "@/hooks/useColorScheme";

export default function App() {
  const theme: ColorScheme = useMemo(() => "light", []);

  const handleWidgetAction = useCallback(async (action: FactAction) => {
    if (process.env.NODE_ENV !== "production") {
      console.info("[ChatKitPanel] widget action", action);
    }
  }, []);

  const handleResponseEnd = useCallback(() => {
    if (process.env.NODE_ENV !== "production") {
      console.debug("[ChatKitPanel] response end");
    }
  }, []);

  return (
    <main className="box-border flex h-screen flex-col items-center justify-center bg-white p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="mx-auto w-full max-w-5xl">
        <ChatKitPanel
          theme={theme}
          onWidgetAction={handleWidgetAction}
          onResponseEnd={handleResponseEnd}
          onThemeRequest={() => {}}
        />
      </div>
    </main>
  );
}
