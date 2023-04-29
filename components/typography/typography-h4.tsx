import { cn } from '@/lib/utils';

interface TypographyH4Props extends React.HTMLAttributes<HTMLHeadingElement> {
    href?: string;
}

export function TypographyH4({
    className,
    children,
    ...props
}: TypographyH4Props) {
    return (
        <h4
            className={cn(
                'mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
                className
            )}
            {...props}
        >{children}</h4>
    );
}
