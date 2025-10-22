'use client';

import React from 'react';
import Card from '../ui/Card';
import Heading from '../ui/Heading';
import Text from '../ui/Text';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className = '',
  delay = 0,
}) => {
  return (
    <Card
      className={`p-6 text-center hover:shadow-xl transition-all duration-300 ${className}`}
      delay={delay}
    >
      <div className="mb-4 flex justify-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
          {icon}
        </div>
      </div>
      
      <Heading
        level={4}
        className="mb-3"
        delay={delay + 0.1}
      >
        {title}
      </Heading>
      
      <Text
        color="secondary"
        className="leading-relaxed"
        delay={delay + 0.2}
      >
        {description}
      </Text>
    </Card>
  );
};

export default FeatureCard;
