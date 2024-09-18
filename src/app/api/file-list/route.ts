import { AccountSASPermissions, SASProtocol, generateAccountSASQueryParameters } from '@azure/storage-blob'
import { NextResponse } from 'next/server'

import blobServiceClient, { credential } from '@/setup/blobStorage'

export const GET = async () => {
	let containerName = ''

	let index = 0

	for await (const container of blobServiceClient.listContainers()) {
		if (index === 0) {
			containerName = container.name
		}

		index += 1
	}

	if (containerName === '') {
		return NextResponse.json({
			message: 'No container found',
		})
	}

	const container = blobServiceClient.getContainerClient(containerName)

	const result = []

	for await (const blob of container.listBlobsFlat()) {
		const blockBlobClient = container.getBlockBlobClient(blob.name)

		result.push({
			name: blob.name,
			url: blockBlobClient.url,
		})
	}

	const sasToken = generateAccountSASQueryParameters(
		{
			expiresOn: new Date(new Date().valueOf() + 86400),
			permissions: AccountSASPermissions.parse('r'),
			services: 'b',
			resourceTypes: 'sco',
			protocol: SASProtocol.Https,
			startsOn: new Date(),
		},
		credential,
	).toString()

	return NextResponse.json({
		message: 'Success',
		containerName,
		result,
		sasToken,
	})
}
