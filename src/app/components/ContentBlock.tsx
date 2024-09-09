import type { ReactNode } from 'react'

interface ContentBlockProps {
	title?: ReactNode
	children: ReactNode
}

export const ContentBlock = ({ title, children }: ContentBlockProps) => {
	return (
		<div className="p-8 bg-foreground rounded-md flex flex-col gap-8">
			{title == null ? null : <h1 className="text-black font-bold text-2xl">{title}</h1>}

			{children}
		</div>
	)
}
