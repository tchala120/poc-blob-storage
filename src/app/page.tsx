'use client'

import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import { FaUpload } from 'react-icons/fa'

import { ContentBlock } from '@/components/ContentBlock'
import { FileItem } from '@/components/FileItem'
import { UploadButton } from '@/components/UploadButton'

export interface UploadFile {
	key: string
	file: File
	name: string
	url?: string
	status: 'success' | 'failed' | 'loading'
}

const Home = () => {
	const [fileList, setFileList] = useState<UploadFile[]>([])

	const onRemove = (key: string) => {
		setFileList((prev) => prev.filter((item) => item.key !== key))
	}

	const uploadMutation = useMutation({
		mutationFn: (input: UploadFile) => {
			const formData = new FormData()

			formData.append('file', input.file)

			return axios.put('/api/upload', formData)
		},
	})

	const result = uploadMutation.data?.data

	return (
		<div className="max-w-[768px] w-full flex flex-col gap-2">
			<ContentBlock title="Upload">
				<UploadButton onChange={setFileList} />

				{fileList.length === 0 ? null : (
					<div className="flex items-center flex-wrap gap-4">
						{fileList.map((item) => (
							<FileItem key={item.key} item={item} onRemove={onRemove} />
						))}
					</div>
				)}

				<button
					className="self-end px-6 py-2 rounded-full bg-purple-400 text-white flex items-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
					disabled={uploadMutation.isPending}
					onClick={() => {
						uploadMutation.mutate(fileList[0])
					}}
				>
					<FaUpload />

					<span>Upload</span>
				</button>
			</ContentBlock>

			{result == null ? null : (
				<ContentBlock title="Result">
					<pre className="text-black overflow-x-auto">{JSON.stringify(result, null, 2)}</pre>
				</ContentBlock>
			)}
		</div>
	)
}

export default Home
