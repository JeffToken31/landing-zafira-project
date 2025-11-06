'use client';

import * as React from 'react';
import {Popover, PopoverTrigger, PopoverContent} from '@radix-ui/react-popover';
import {Menu} from 'lucide-react';
import {Button} from './ui/Button';
import {cn} from '../../lib/cn';

export default function MobileMenu() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="default" size="sm">
          <Menu />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        sideOffset={5}
        className={cn(
          'relative z-50 flex flex-col bg-white dark:bg-black p-4 rounded-xl shadow-lg min-w-[180px]',
          'space-y-4 border border-neutral-200 dark:border-neutral-800'
        )}
      >
        {[
          {label: 'Home', href: '#hero'},
          {label: 'Features', href: '#features'},
          {label: 'About', href: '#about'},
        ].map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="
              text-text font-medium transition-all duration-500
              hover:bg-gradient-to-r hover:from-primary hover:via-cyan-400 hover:to-blue-500
              hover:bg-clip-text hover:text-transparent
            "
          >
            {link.label}
          </a>
        ))}
      </PopoverContent>
    </Popover>
  );
}
