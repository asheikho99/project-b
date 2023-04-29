import { cn } from '@/lib/utils';

interface TypographyAProps extends React.HTMLAttributes<HTMLAnchorElement>{}

export function TypographyA({
    className,
    children,
    ...props
}: TypographyAProps) {
    return (
        <a
            className={cn(
                'font-medium underline underline-offset-4',
                className
            )}
            {...props}
        >{children}</a>
    );
}
