import { cn } from '@/lib/utils';

interface TypographyPreProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLPreElement>,
        HTMLPreElement
    > {}

export function TypographyPre({
    className,
    children,
    ...props
}: TypographyPreProps) {
    return (
        <pre
            className={cn(
                'mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4',
                className
            )}
            {...props}>
            {children}
        </pre>
    );
}
