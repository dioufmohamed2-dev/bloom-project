export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Agency' | 'Product' | 'Community';
  features?: string[];
}

export interface NavItem {
  label: string;
  path: string;
}

export type IconName = 
  | 'Award'
  | 'CheckCircle2'
  | 'Lightbulb'
  | 'Menu'
  | 'MessageCircle'
  | 'Moon'
  | 'Network'
  | 'ShieldCheck'
  | 'Sun'
  | 'TrendingUp'
  | 'Users'
  | 'X'
  | 'Globe'
  | 'Layers'
  | 'Target'
  | 'ArrowRight';

export interface ValueItem {
  title: string;
  description: string;
  iconName: IconName;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  whatsappNumber: string; // Format: 1234567890 (no +)
  colors: {
    primary: string;
    secondary: string;
  };
}
