'use client';
import clsx from 'clsx';
import { useState, useCallback } from 'react';
import { Bell, CloudUpload, Info, RadioTower, Remote, SourceControl, Warning } from '@/icons';

const rightItems = [
  {
    icon: <span>Spaces: 2</span>,
    text: 'Select Indentation',
    position: 'center' as const,
  },
  {
    icon: <span>UTF-8</span>,
    text: 'Select Encoding',
    position: 'center' as const,
  },
  {
    icon: <span>CRLF</span>,
    text: 'Select End of Line Sequence',
    position: 'center' as const,
  },
  {
    icon: <span>&#123; &#125; TypeScript JSX</span>,
    text: 'Select Language Mode',
    position: 'center' as const,
  },
  {
    icon: (
      <div className="flex">
        <RadioTower />
        <span className="ml-1">Go Live</span>
      </div>
    ),
    text: 'Click to run live server',
    position: 'right' as const,
  },
  {
    icon: <Bell />,
    text: 'No Notifications',
    position: 'right' as const,
  },
];

export default function BottomBar() {
  return (
    <div className="flex justify-between border-t-2 border-dark_border text-gray-500 text-sm select-none">
      <div className="flex items-center cursor-pointer gap-1">
        <div className="bg-blue-300 0">
          <Tooltip icon={<Remote />} text="Open a Remote Window" position="left" />
        </div>
        <Tooltip
          icon={
            <div className="flex">
              <SourceControl height={18} width={18} />
              <span className="ml-1">main*</span>
            </div>
          }
          text="portfolio Git - main*"
          position="left"
        />
        <Tooltip icon={<CloudUpload />} text="portfolio (Git) - Publish Branch" position="center" />
        <Tooltip
          icon={
            <div className="flex items-center text-xs">
              <Info />
              <span className="mx-1">0</span>
              <Warning />
              <span className="ml-1">0</span>
            </div>
          }
          text="No Problems"
          position="center"
        />
      </div>
      <div className="flex items-center cursor-pointer mr-2 gap-2">
        {rightItems.map((item, index) => (
          <Tooltip key={index} icon={item.icon} text={item.text} position={item.position} />
        ))}
      </div>
    </div>
  );
}

function Tooltip({ icon, text, position }: { icon: JSX.Element; text: string; position: 'left' | 'right' | 'center' }) {
  const [toolTipActive, setToolTipActive] = useState<boolean>(false);

  const handleMouseIn: React.MouseEventHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setToolTipActive(true);
  }, []);

  const handleMouseOut: React.MouseEventHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setToolTipActive(false);
  }, []);

  return (
    <div className="relative">
      <div onMouseOver={handleMouseIn} onMouseOut={handleMouseOut} className="p-1 px-2 relative hover:bg-blue-200">
        {icon}
      </div>
      <span
        className={clsx(
          toolTipActive ? 'block opacity-100' : 'opacity-0 hidden',
          position === 'right' && 'right-0',
          position === 'left' && 'left-0',
          position === 'center' && 'left-1/2 -translate-x-1/2',
          'absolute -translate-y-[calc(100%+5px)] top-0 bg-dark_bg border border-dark_border py-1 px-2 whitespace-nowrap text-sm transition-opacity ease-in-out duration-300 select-none'
        )}
      >
        {text}
      </span>
    </div>
  );
}
