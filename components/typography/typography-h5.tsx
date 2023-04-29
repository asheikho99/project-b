import { cn } from '@/lib/utils';

interface TypographyH5Props extends React.HTMLAttributes<HTMLHeadingElement> {
    href?: string;
}

export function TypographyH5({
    className,
    children,
    ...props
}: TypographyH5Props) {
    return (
        <h5
            className={cn(
                'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
                className
            )}
            {...props}
        >{children}</h5>
    );
}
