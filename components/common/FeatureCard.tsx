import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgColor?: string;
  iconColor?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  iconBgColor = 'bg-[#eef7f6]',
  iconColor = 'text-[#0a5c57]'
}: FeatureCardProps) {
  return (
    <div className="flex gap-6">
      <div className={`shrink-0 w-12 h-12 ${iconBgColor} ${iconColor} rounded-sm flex items-center justify-center`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
