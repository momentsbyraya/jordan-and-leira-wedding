// Global wedding palette
export const theme = {
    primary: "#CC5500",       // Burnt Orange
    secondary: "#0B1F3A",     // Navy Blue
    background: "#FDF6F0",    // Light Cream
    accent: "#AAB7C4",
    textPrimary: "#0B1F3A",
    textSecondary: "#5A6B7C"
}

// Theme Configuration - Easy to customize colors
export const themeConfig = {
    // Background Colors
    backgrounds: {
        primary: 'bg-[#0B1F3A]',
        secondary: 'bg-[#AAB7C4]',
        accent: 'bg-[#CC5500]',
        light: 'bg-[#FDF6F0]/50',
        theme: 'bg-[#FDF6F0]',
        crumpledPaper: 'bg-[url("/assets/images/crumpled-paper.png")] bg-cover bg-center bg-no-repeat', // Crumpled paper background
    },

    // Text Colors
    text: {
        primary: 'text-[#0B1F3A]',
        secondary: 'text-[#5A6B7C]',
        accent: 'text-[#CC5500]',
        muted: 'text-[#5A6B7C]',
        dark: 'text-[#0B1F3A]',
        theme: 'text-[#5A6B7C]',
        pause: 'text-[#FDF6F0]',
        custom: 'text-[#0B1F3A]',
    },

    // Border Colors
    borders: {
        primary: 'border-[#0B1F3A]',
        secondary: 'border-[#AAB7C4]',
        accent: 'border-[#CC5500]',
        theme: 'border-[#5A6B7C]',
    },

    // Button Colors
    buttons: {
        primary: 'bg-[#CC5500] hover:bg-[#A84400]',
        secondary: 'border border-[#AAB7C4] hover:border-[#0B1F3A]',
        text: 'text-white hover:text-white',
        theme: 'bg-[#0B1F3A] hover:bg-[#0B1F3A]/90',
    },

    // Hover Effects
    hover: {
        primary: 'hover:bg-[#A84400]',     // Primary button hover (Dark Maroon)
        secondary: 'hover:border-[#0B1F3A] hover:text-white',
        theme: 'hover:bg-[#0B1F3A]/90',
    },

    // Container Configuration
    container: {
        maxWidth: 'max-w-[1300px]',
        padding: 'px-4 sm:px-6 lg:px-8',
        center: 'mx-auto',
    },

    // Calendar Configuration
    calendar: {
        weddingDate: '2026-06-26',          // Wedding date (YYYY-MM-DD format)
        highlightColor: 'bg-[#CC5500]',
        heartColor: 'text-[#CC5500]',
        textColor: 'text-[#5A6B7C]',
        headerColor: 'text-[#0B1F3A]',
        dayNamesColor: 'text-[#5A6B7C]',
        background: 'bg-[#FDF6F0]',
    },

    // Paragraph Configuration
    paragraph: {
        background: 'bg-[#FDF6F0]',         // Paragraph background color
    },

    // Custom CSS Variables (for advanced customization)
    cssVariables: {
        '--primary-bg': '#0B1F3A',
        '--secondary-bg': '#AAB7C4',
        '--accent-bg': '#CC5500',
        '--accent-hover': '#A84400',
        '--primary-text': '#0B1F3A',
        '--secondary-text': '#5A6B7C',
        '--accent-text': '#CC5500',
        '--muted-text': '#5A6B7C',
        '--border-color': '#AAB7C4',
        '--custom-theme': '#FDF6F0',
    }
}

// Quick color presets for different themes
export const themePresets = {
    // Burnt Orange + Navy (Default)
    darkElegant: {
        backgrounds: {
            primary: 'bg-[#0B1F3A]',
            secondary: 'bg-[#FDF6F0]',
            accent: 'bg-[#CC5500]',
        },
        text: {
            primary: 'text-[#0B1F3A]',
            secondary: 'text-[#5A6B7C]',
            accent: 'text-[#CC5500]',
        }
    },

    // Light Romantic
    lightRomantic: {
        backgrounds: {
            primary: 'bg-[#FDF6F0]',
            secondary: 'bg-[#FDF6F0]',
            accent: 'bg-[#CC5500]',
        },
        text: {
            primary: 'text-[#0B1F3A]',
            secondary: 'text-[#5A6B7C]',
            accent: 'text-[#CC5500]',
        }
    },

    // Warm Autumn
    warmAutumn: {
        backgrounds: {
            primary: 'bg-[#FDF6F0]',
            secondary: 'bg-[#AAB7C4]',
            accent: 'bg-[#CC5500]',
        },
        text: {
            primary: 'text-[#0B1F3A]',
            secondary: 'text-[#5A6B7C]',
            accent: 'text-[#CC5500]',
        }
    }
}

// Helper function to get theme colors
export const getThemeColor = (type, variant = 'primary') => {
    return themeConfig[type]?.[variant] || themeConfig.text.primary
}

// Helper function to apply theme preset
export const applyThemePreset = (presetName) => {
    const preset = themePresets[presetName]
    if (preset) {
        Object.assign(themeConfig, preset)
    }
} 