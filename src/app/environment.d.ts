/// <reference types="node" />

declare namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV: 'development' | 'production'

		/**
		 * Azure blob storage configuration
		 */

		NEXT_PUBLIC_ACCOUNT_NAME: string
		NEXT_PUBLIC_SAS_TOKEN: string
		NEXT_PUBLIC_CONTAINER_NAME: string
	}
}
