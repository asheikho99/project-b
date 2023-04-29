import { cn } from '@/lib/utils';

interface TypographyUListProps extends React.HTMLAttributes<HTMLUListElement> {}

export function TypographyUList({
    className,
    children,
    ...props
}: TypographyUListProps) {
    return (
        <ul
            className={cn(
                'my-6 ml-6 list-disc',
                className
            )}
            {...props}>
            {children}
        </ul>
    );
}
