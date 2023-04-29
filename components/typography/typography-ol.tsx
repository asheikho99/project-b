import { cn } from '@/lib/utils';

interface TypographyOListProps extends React.HTMLAttributes<HTMLOListElement> {}

export function TypographyOList({
    className,
    children,
    ...props
}: TypographyOListProps) {
    return (
        <ul
            className={cn(
                'my-6 ml-6 list-decimal',
                className
            )}
            {...props}>
            {children}
        </ul>
    );
}
