import * as React from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { Callout } from '@/components/callout';
import { MdxCard } from '@/components/mdx-card';
import { MDXComponents } from 'mdx/types';

import { TypographyH1 } from './components/typography/typography-h1';
import { TypographyH2 } from './components/typography/typography-h2';
import { TypographyH3 } from './components/typography/typography-h3';
import { TypographyH4 } from './components/typography/typography-h4';
import { TypographyH5 } from './components/typography/typography-h5';
import { TypographyH6 } from './components/typography/typography-h6';
import { TypographyA } from './components/typography/typography-a';
import { TypographyP } from './components/typography/typography-p';
import { TypographyUList } from './components/typography/typography-ul';
import { TypographyOList } from './components/typography/typography-ol';
import { TypographyList } from './components/typography/typography-list';
import { TypographyBlockquote } from './components/typography/typography-block-quote';
import { TypographyPre } from './components/typography/typography-pre';

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // Allows customizing built-in components, e.g. to add styling.
        h1: TypographyH1,
        h2: TypographyH2,
        h3: TypographyH3,
        h4: TypographyH4,
        h5: TypographyH5,
        h6: TypographyH6,
        a: TypographyA,
        p: TypographyP,
        ul: TypographyUList,
        ol: TypographyOList,
        li: TypographyList,
        blockquote: TypographyBlockquote,
        img: ({
            className,
            alt,
            ...props
        }: React.ImgHTMLAttributes<HTMLImageElement>) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
                className={cn('rounded-md border', className)}
                alt={alt}
                {...props}
            />
        ),
        hr: ({ ...props }) => <hr className='my-4 md:my-8' {...props} />,
        table: ({
            className,
            ...props
        }: React.HTMLAttributes<HTMLTableElement>) => (
            <div className='my-6 w-full overflow-y-auto'>
                <table className={cn('w-full', className)} {...props} />
            </div>
        ),
        tr: ({
            className,
            ...props
        }: React.HTMLAttributes<HTMLTableRowElement>) => (
            <tr
                className={cn('m-0 border-t p-0 even:bg-muted', className)}
                {...props}
            />
        ),
        th: ({ className, ...props }) => (
            <th
                className={cn(
                    'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
                    className
                )}
                {...props}
            />
        ),
        td: ({ className, ...props }) => (
            <td
                className={cn(
                    'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
                    className
                )}
                {...props}
            />
        ),
        pre: TypographyPre,
        code: ({ className, ...props }) => (
            <code
                className={cn(
                    'relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm',
                    className
                )}
                {...props}
            />
        ),
        Image,
        Callout,
        Card: MdxCard,
        ...components,
    };
}
