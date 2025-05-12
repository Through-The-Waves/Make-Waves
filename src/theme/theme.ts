export const theme = {
    colors: {
        primary: "#007AFF",
        secondary: "#5856D6",
        background: "#FFFFFF",
        text: "#000000",
        textSecondary: "#666666",
        border: "#E5E5E5",
        error: "#FF3B30",
        success: "#34C759",
    },
    spacing: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
    },
    typography: {
        h1: {
            fontSize: 32,
            fontWeight: "700" as const,
        },
        h2: {
            fontSize: 24,
            fontWeight: "700" as const,
        },
        body: {
            fontSize: 16,
        },
        caption: {
            fontSize: 14,
            color: "#666666",
        },
    },
    borderRadius: {
        sm: 4,
        md: 8,
        lg: 16,
        full: 9999,
    },
};

export type Theme = typeof theme;
