import { AnonymousCredential, BlobServiceClient } from '@azure/storage-blob'

const client = new BlobServiceClient(
	`https://${process.env.NEXT_PUBLIC_ACCOUNT_NAME}.blob.core.windows.net/?${process.env.NEXT_PUBLIC_SAS_TOKEN}`,
	new AnonymousCredential(),
)

export const blobContainer = client.getContainerClient(process.env.NEXT_PUBLIC_CONTAINER_NAME)

export default client
