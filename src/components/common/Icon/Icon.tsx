import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  Lightbulb, 
  Menu, 
  MessageCircle, 
  Moon, 
  Network, 
  ShieldCheck, 
  Sun, 
  TrendingUp, 
  Users, 
  X,
  Globe,
  Layers,
  Target,
  ArrowRight,
  LucideIcon
} from 'lucide-react';
import { IconName } from '@/types';

interface IconProps {
  name: IconName;
  className?: string;
  size?: number | string;
}

const iconMap: Record<IconName, LucideIcon> = {
  Award,
  CheckCircle2,
  Lightbulb,
  Menu,
  MessageCircle,
  Moon,
  Network,
  ShieldCheck,
  Sun,
  TrendingUp,
  Users,
  X,
  Globe,
  Layers,
  Target,
  ArrowRight
};

export const Icon: React.FC<IconProps> = ({ name, className = '', size = 24 }) => {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    return null;
  }
  
  return <IconComponent className={className} size={size} />;
};
