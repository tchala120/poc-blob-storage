import { UploadFile } from '@/page'
import { FaTimes } from 'react-icons/fa'

interface FileItemProps {
	item: UploadFile
	onRemove: (key: string) => void
}

export const FileItem = ({ item, onRemove }: FileItemProps) => {
	return (
		<div
			className="rounded-full bg-gray-700 text-white px-4 py-2 flex items-center gap-4"
			key={item.key}
			onClick={() => {
				window.open(item.url, '_blank')
			}}
		>
			<span>{item.name}</span>

			<div
				className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-500 cursor-pointer"
				onClick={(event) => {
					event.stopPropagation()

					onRemove(item.key)
				}}
			>
				<FaTimes />
			</div>
		</div>
	)
}
