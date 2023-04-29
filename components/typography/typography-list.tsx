import { cn } from '@/lib/utils';

interface TypographyListProps extends React.HTMLAttributes<HTMLLIElement> {}

export function TypographyList({
    className,
    children,
    ...props
}: TypographyListProps) {
    return (
        <li className={cn('mt-2', className)} {...props}>
            {children}
        </li>
    );
}
