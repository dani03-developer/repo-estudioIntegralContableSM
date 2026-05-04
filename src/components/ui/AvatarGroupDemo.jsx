import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import {
  AvatarGroup,
  AvatarGroupTooltip,
  AvatarGroupTooltipArrow,
} from '@/components/animate-ui/primitives/animate/avatar-group';
import { motion } from 'motion/react';

const AVATARS = [
  {
    src: 'https://i.postimg.cc/2ST5Rfqq/avatar2.jpg',
    fallback: 'SM',
    tooltip: 'Silvia Machaca',
  },
  {
    src: 'https://pbs.twimg.com/profile_images/1677042510839857154/Kq4tpySA_400x400.jpg',
    fallback: 'AW',
    tooltip: 'Adam Wathan',
  },
  {
    src: 'https://pbs.twimg.com/profile_images/1927474594102784000/Al0g-I6o_400x400.jpg',
    fallback: 'DH',
    tooltip: 'David Haz',
  },
];

export const AvatarGroupDemo = () => {
  return (
    <AvatarGroup className="h-12 -space-x-3" invertOverlap>
      {AVATARS.map((avatar, index) => (
        <Avatar key={index} className="size-12 border-3 border-background">
          <AvatarImage src={avatar.src} />
          <AvatarFallback>{avatar.fallback}</AvatarFallback>
          <AvatarGroupTooltip className="bg-primary px-3 py-1.5 text-sm text-primary-foreground">
            <AvatarGroupTooltipArrow className="fill-primary size-2.5" />
            <motion.p layout="preserve-aspect">{avatar.tooltip}</motion.p>
          </AvatarGroupTooltip>
        </Avatar>
      ))}
    </AvatarGroup>
  );
};