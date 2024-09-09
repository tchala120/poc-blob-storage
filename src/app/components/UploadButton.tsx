'use client'

import { UploadFile } from '@/page'
import { InputHTMLAttributes, useRef } from 'react'

interface UploadButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
	onChange?: (files: UploadFile[]) => void
}

export const UploadButton = ({ onChange, ...props }: UploadButtonProps) => {
	const fileInputRef = useRef<HTMLInputElement>(null)

	return (
		<>
			<input
				ref={fileInputRef}
				type="file"
				className="hidden"
				{...props}
				onChange={(event) => {
					const files = event.target.files

					if (files == null) {
						return
					}

					const fileList: UploadFile[] = Array.from(files).map((file, index) => ({
						key: index.toString(),
						file,
						name: file.name,
						url: URL.createObjectURL(file),
						status: 'loading',
					}))

					onChange?.(fileList)

					event.target.value = ''
				}}
			/>

			<div
				className="w-32 h-32 cursor-pointer font-bold border-2 border-dashed border-gray-700 text-black flex justify-center items-center"
				onClick={() => fileInputRef.current?.click()}
			>
				Upload
			</div>
		</>
	)
}
