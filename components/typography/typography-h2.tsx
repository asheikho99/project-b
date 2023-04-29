import { cn } from '@/lib/utils';

interface TypographyH2Props extends React.HTMLAttributes<HTMLHeadingElement> {
    href?: string;
}

export function TypographyH2({
    className,
    children,
    ...props
}: TypographyH2Props) {
    return (
        <h2
            className={cn(
                'mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0',
                className
            )}
            {...props}
        >{children}</h2>
    );
}
