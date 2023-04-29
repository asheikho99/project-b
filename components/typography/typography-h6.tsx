import { cn } from '@/lib/utils';

interface TypographyH6Props extends React.HTMLAttributes<HTMLHeadingElement> {
    href?: string;
}

export function TypographyH6({
    className,
    children,
    ...props
}: TypographyH6Props) {
    return (
        <h6
            className={cn(
                'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
                className
            )}
            {...props}
        >{children}</h6>
    );
}
