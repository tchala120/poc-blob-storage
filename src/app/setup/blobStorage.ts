import { BlobServiceClient, StorageSharedKeyCredential } from '@azure/storage-blob'

export const credential = new StorageSharedKeyCredential(
	process.env.NEXT_PUBLIC_ACCOUNT_NAME,
	process.env.NEXT_PUBLIC_ACCOUNT_KEY,
)

const blobServiceClient = new BlobServiceClient(
	`https://${process.env.NEXT_PUBLIC_ACCOUNT_NAME}.blob.core.windows.net`,
	credential,
)

export const blobContainer = blobServiceClient.getContainerClient(process.env.NEXT_PUBLIC_CONTAINER_NAME)

export default blobServiceClient
