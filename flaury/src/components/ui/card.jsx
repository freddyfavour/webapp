import * as React from 'react';

import { cn } from '../../context/lib/utils';

const Card = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-lg border bg-card text-card-foreground shadow-sm bg-white shadow-[0px_2px_4px_-2px_rgba(16,24,40,0.10)] shadow-[0px_4px_6px_-1px_rgba(16,24,40,0.10)]',
      props.className
    )}
    {...props}
  />
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', props.className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef((props, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      props.className
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef((props, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', props.className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef((props, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', props.className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', props.className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
