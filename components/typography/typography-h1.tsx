import { cn } from '@/lib/utils';

interface TypographyH1Props extends React.HTMLAttributes<HTMLHeadingElement> {
    href?: string;
}

export function TypographyH1({
    className,
    children,
    ...props
}: TypographyH1Props) {
    return (
        <h1
            className={cn(
                'mt-2 scroll-m-20 text-4xl font-bold tracking-tight',
                className
            )}
            {...props}
        >{children}</h1>
    );
}
