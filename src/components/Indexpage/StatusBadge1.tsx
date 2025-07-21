import React from 'react';

interface Props {
  label: string;
  type: 'ing' | 'done';
}

const StatusBadge = ({ label, type }: Props) => {
  const styles = {
    ing: {
      bg: 'bg-main50',
      text: 'text-main800',
    },
    done: {
      bg: 'bg-green50',
      text: 'text-green800',
    },
  }[type];

  return (
    <div className={`px-2 py-[2px] rounded-[4px] inline-block ${styles.bg}`}>
      <span className={`text-[17px] font-bold ${styles.text}`}>{label}</span>
    </div>
  );
};

export default StatusBadge;
