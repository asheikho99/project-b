import { cn } from '@/lib/utils';

interface TypographyBlockquoteProps
    extends React.BlockquoteHTMLAttributes<HTMLQuoteElement> {}

export function TypographyBlockquote({
    className,
    children,
    ...props
}: TypographyBlockquoteProps) {
    return (
        <blockquote
            className={cn(
                'mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground',
                className
            )}
            {...props}>
            {children}
        </blockquote>
    );
}
