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
          'relative z-50 flex flex-col bg-white p-4 rounded-lg shadow-lg min-w-[180px]',
          'space-y-3'
        )}
      >
        <a
          href="#hero"
          className="text-text hover:text-primary transition-colors"
        >
          Home
        </a>
        <a
          href="#features"
          className="text-text hover:text-primary transition-colors"
        >
          Features
        </a>
        <a
          href="#about"
          className="text-text hover:text-primary transition-colors"
        >
          About
        </a>
      </PopoverContent>
    </Popover>
  );
}
