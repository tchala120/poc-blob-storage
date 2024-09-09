import type { ReactNode } from 'react'

import { ReactQueryProvider } from '@/setup/ReactQueryProvider'

interface ProvidersProps {
	children: ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
	return <ReactQueryProvider>{children}</ReactQueryProvider>
}
