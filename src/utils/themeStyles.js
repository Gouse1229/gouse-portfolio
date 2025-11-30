// Theme utility functions for consistent styling
export const themeStyles = {
  // Backgrounds
  bgPrimary: { backgroundColor: 'var(--bg-primary)' },
  bgSecondary: { backgroundColor: 'var(--bg-secondary)' },
  bgCard: { backgroundColor: 'var(--card-bg)' },
  bgGradient: 'bg-gradient-theme',
  
  // Text Colors
  textPrimary: { color: 'var(--text-primary)' },
  textSecondary: { color: 'var(--text-secondary)' },
  textTertiary: { color: 'var(--text-tertiary)' },
  textMuted: { color: 'var(--text-muted)' },
  textAccent: { color: 'var(--accent-primary)' },
  
  // Borders
  borderPrimary: { borderColor: 'var(--border-primary)' },
  borderSecondary: { borderColor: 'var(--border-secondary)' },
  borderCard: { borderColor: 'var(--card-border)' },
  
  // Combined Styles
  card: {
    backgroundColor: 'var(--card-bg)',
    borderColor: 'var(--card-border)',
  },
  
  button: {
    backgroundColor: 'var(--card-bg)',
    color: 'var(--text-primary)',
    borderColor: 'var(--border-primary)',
  },
  
  buttonPrimary: {
    background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
    color: 'white',
  },
};


