

export const THEMES = {
AURORA_INK: {
background: "#0b1020",
foreground: "#f4f6ff",

card: "#121a33",
cardForeground: "#f4f6ff",

popover: "#121a33",
popoverForeground: "#f4f6ff",

primary: "#7c5cff",
primaryRgb: "124, 92, 255",
primaryForeground: "#0b1020",

secondary: "#1a2547",
secondaryForeground: "#e8ebff",

muted: "#141d3a",
mutedForeground: "#a9b2d6",

accent: "#7c5cff",
accentForeground: "#ffffff",

destructive: "#d94444",

border: "#1f2a4a",
input: "#ffffff",
ring: "#7c5cff",

radius: "1rem",
},

DUSTY_ORCHID: {
background: "#1a1324",
foreground: "#f4effa",

card: "#241a33",
cardForeground: "#f4effa",

popover: "#241a33",
popoverForeground: "#f4effa",

primary: "#b08cff",
primaryRgb: "176, 140, 255",
primaryForeground: "#1a1324",

secondary: "#34254a",
secondaryForeground: "#e6dcff",

muted: "#2a1f3b",
mutedForeground: "#b3a6d4",

accent: "#e39ccf",
accentForeground: "#1a1324",

destructive: "#d94444",

border: "#3b2c55",
input: "#ffffff",
ring: "#b08cff",

radius: "1rem",
},

CITRUS_SLATE: {
background: "#0f172a",
foreground: "#f8fafc",

card: "#111c35",
cardForeground: "#f8fafc",

popover: "#111c35",
popoverForeground: "#f8fafc",

primary: "#facc15",
primaryRgb: "250, 204, 21",
primaryForeground: "#0f172a",

secondary: "#1e293b",
secondaryForeground: "#e5e7eb",

muted: "#18233d",
mutedForeground: "#94a3b8",

accent: "#f97316",
accentForeground: "#0f172a",

destructive: "#d94444",

border: "#25324f",
input: "#ffffff",
ring: "#facc15",

radius: "1rem",
},

POLAR_MINT: {
background: "#ecfdf5",
foreground: "#064e3b",

card: "#ffffff",
cardForeground: "#064e3b",

popover: "#ffffff",
popoverForeground: "#064e3b",

primary: "#2dd4bf",
primaryRgb: "45, 212, 191",
primaryForeground: "#022c22",

secondary: "#ccfbf1",
secondaryForeground: "#064e3b",

muted: "#d1fae5",
mutedForeground: "#4b7f73",

accent: "#5eead4",
accentForeground: "#022c22",

destructive: "#dc2626",

border: "#99f6e4",
input: "#ffffff",
ring: "#2dd4bf",

radius: "1rem",
},

MOSS_PARCHMENT: {
background: "#f7f6f2",
foreground: "#1d261f",

card: "#ffffff",
cardForeground: "#1d261f",

popover: "#ffffff",
popoverForeground: "#1d261f",

primary: "#4a7d4a",
primaryRgb: "74, 125, 74",
primaryForeground: "#ffffff",

secondary: "#e7efe5",
secondaryForeground: "#1d261f",

muted: "#e3eadf",
mutedForeground: "#5f6f63",

accent: "#b26d2d",
accentForeground: "#ffffff",

destructive: "#d94444",

border: "#d6e0d4",
input: "#ffffff",
ring: "#2f7d4a",

radius: "1rem",
},

OBSIDIAN_BLOOM: {
background: "#0c0c0f",
foreground: "#f5f5f7",

card: "#141418",
cardForeground: "#f5f5f7",

popover: "#141418",
popoverForeground: "#f5f5f7",

primary: "#ff5fa2",
primaryRgb: "255, 95, 162",
primaryForeground: "#0c0c0f",

secondary: "#1f1f26",
secondaryForeground: "#e7e7eb",

muted: "#1a1a22",
mutedForeground: "#9a9aa5",

accent: "#ff5fa2",
accentForeground: "#ffffff",

destructive: "#d94444",

border: "#262631",
input: "#ffffff",
ring: "#ff5fa2",

radius: "1rem",
},
} as const;



export const THEME_NAME_LIST = [
"AURORA_INK",
"DUSTY_ORCHID",
"CITRUS_SLATE",
"MOSS_PARCHMENT",
"POLAR_MINT",
"OBSIDIAN_BLOOM",
] as const;

export type ThemeKey = keyof typeof THEMES;
export type Theme = (typeof THEMES)[ThemeKey];