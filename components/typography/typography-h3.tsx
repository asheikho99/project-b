import { cn } from '@/lib/utils';

interface TypographyH3Props extends React.HTMLAttributes<HTMLHeadingElement> {
    href?: string;
}

export function TypographyH3({
    className,
    children,
    ...props
}: TypographyH3Props) {
    return (
        <h3
            className={cn(
                'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight',
                className
            )}
            {...props}
        >{children}</h3>
    );
}
