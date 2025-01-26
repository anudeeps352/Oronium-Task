import React from 'react';

type Props = {
  count: number;
  className?: string;
};

function NotificationBadge({ count, className }: Props) {
  return (
    <div
      className={`w-7 h-7 p-2 rounded-full flex justify-center items-center ${className}`}
    >
      {count}
    </div>
  );
}

export default NotificationBadge;
