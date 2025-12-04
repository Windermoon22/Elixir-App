/**
 * Elixir App Theme - Complete design system with colors, typography, spacing, and shadows
 * Uses light/dark mode support with your existing structure
 */

import { Platform } from 'react-native';

/**
 * ELIXIR BRAND COLORS (Light Mode)
 */
const tintColorLight = '#fae2b2ff'; // Gold primary

/**
 * ELIXIR BRAND COLORS (Dark Mode)
 */
const tintColorDark = '#fff';

/**
 * COLORS - Light & Dark modes
 */
export const Colors = {
  light: {
    // Text colors
    text: '#11181C',
    textSecondary: '#6B7280',
    textMuted: '#9CA3AF',

    // Backgrounds
    background: '#FFF5DA',     // Warm cream
    surface: '#FFFFFF',
    card: '#FFFFFF',
    overlay: 'rgba(255, 255, 255, 0.9)',

    // Brand colors
    primary: '#FFC857',        // Gold
    primaryDark: '#D4A017',    // Dark gold
    secondary: '#F8D662',      // Light gold
    accent: '#FF6B35',         // Orange accent

    // Status colors
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',

    // Borders & divider
    border: '#E5E7EB',
    divider: '#F3F4F6',

    // Icons
    icon: '#6B7280',
    tabIconDefault: '#9CA3AF',
    tabIconSelected: tintColorLight,
  },
  dark: {
    // Text colors
    text: '#ECEDEE',
    textSecondary: '#9BA1A6',
    textMuted: '#6B7280',

    // Backgrounds
    background: '#0F1117',
    surface: '#151718',
    card: '#1F222A',
    overlay: 'rgba(21, 23, 24, 0.95)',

    // Brand colors
    primary: '#FFD166',
    primaryDark: '#E6B800',
    secondary: '#FFAB4D',
    accent: '#FF8A65',

    // Status colors
    success: '#34D399',
    warning: '#FCD34D',
    error: '#F87171',

    // Borders & divider
    border: '#374151',
    divider: '#2D323D',

    // Icons
    icon: '#76838eff',
    tabIconDefault: '#6B7280',
    tabIconSelected: tintColorDark,
  },
};

/**
 * TYPOGRAPHY - Platform-specific fonts
 */
export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

/**
 * TYPOGRAPHY SCALES
 */
export const Typography = {
  h1: { fontSize: 32, lineHeight: 40, fontWeight: '800' as const },
  h2: { fontSize: 28, lineHeight: 36, fontWeight: '700' as const },
  h3: { fontSize: 24, lineHeight: 32, fontWeight: '700' as const },
  h4: { fontSize: 20, lineHeight: 28, fontWeight: '600' as const },
  title: { fontSize: 18, lineHeight: 26, fontWeight: '600' as const },
  body: { fontSize: 16, lineHeight: 24, fontWeight: '400' as const },
  caption: { fontSize: 14, lineHeight: 20, fontWeight: '400' as const },
  small: { fontSize: 15, lineHeight: 16, fontWeight: '500' as const },
};

/**
 * SPACING SCALE (multiples of 4)
 */
export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  huge: 40,
  massive: 48,
};

/**
 * SHADOWS (iOS & Android compatible)
 */
export const Shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 10,
  },
};

/**
 * RADIUS - Border radius values
 */
export const Radius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
};

/**
 * Complete Theme Object (for useColorScheme hook)
 */
export const useThemeColors = (colorScheme: 'light' | 'dark' = 'light') => ({
  colors: Colors[colorScheme],
  typography: Typography,
  spacing: Spacing,
  shadows: Shadows,
  radius: Radius,
  fonts: Fonts,
});

/**
 * TypeScript types for theme (for better autocomplete)
 */
export type ColorScheme = 'light' | 'dark';
export type ThemeColors = typeof Colors.light;

