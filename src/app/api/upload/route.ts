import { NextRequest, NextResponse } from 'next/server'
import { zfd } from 'zod-form-data'

import { blobContainer } from '@/setup/blobStorage'

const schema = zfd.formData({
	file: zfd.file(),
})

export const PUT = async (request: NextRequest) => {
	const { file } = schema.parse(await request.formData())

	const blobClient = blobContainer.getBlockBlobClient(file.name)

	const toBuffer = await file.arrayBuffer()

	const result = await blobClient.uploadData(toBuffer, {
		blobHTTPHeaders: {
			blobContentType: file.type,
		},
	})

	return NextResponse.json({
		message: 'Upload data successfully',
		result,
		url: blobClient.url,
	})
}
