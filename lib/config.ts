import type {
  ChatKitOptions,
  ColorScheme,
  StartScreenPrompt,
  ThemeOption,
} from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    icon: "circle-question",
    label: "What is ChatKit?",
    prompt: "What is ChatKit?",
  },
  {
    icon: "book-open",
    label: "Show me the playbook",
    prompt: "Walk me through the Collective 54 playbook",
  },
  {
    icon: "info",
    label: "Membership basics",
    prompt: "How does membership in Collective 54 work?",
  },
  {
    icon: "sparkle",
    label: "Personalized help",
    prompt: "Recommend resources based on my role",
  },
  {
    icon: "calendar",
    label: "Upcoming events",
    prompt: "What events are happening soon?",
  },
];

export const PLACEHOLDER_INPUT = "How can I help?";

export const GREETING = "Welcome to Collective 54.";

export const COMPOSER_OPTIONS: ChatKitOptions["composer"] = {
  placeholder: PLACEHOLDER_INPUT,
  attachments: {
    enabled: true,
    maxCount: 5,
    maxSize: 10_485_760,
  },
  tools: [
    {
      id: "search_docs",
      label: "Search docs",
      shortLabel: "Docs",
      placeholderOverride: "Search documentation",
      icon: "book-open",
      pinned: false,
    },
    {
      id: "collective_resources",
      label: "Collective resources",
      shortLabel: "Resources",
      placeholderOverride: "Search Collective 54 resources",
      icon: "notebook",
      pinned: false,
    },
  ],
};

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  colorScheme: theme,
  color: {
    accent: {
      primary: "#B3421A",
      level: 1,
    },
  },
  typography: {
    baseSize: 16,
    fontFamily:
      '"OpenAI Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif',
    fontFamilyMono:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
    fontSources: [
      {
        family: "OpenAI Sans",
        src: "https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-Regular.woff2",
        weight: 400,
        style: "normal",
        display: "swap",
      },
    ],
  },
  radius: "soft",
  density: "normal",
});
