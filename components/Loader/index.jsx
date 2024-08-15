import Text from "@/components/Text"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

export default function Loader() {
    return (
        <div className='flex items-center gap-2 animate-pulse text-gray-500'>
            <span className="animate-spin text-xl">
                <AiOutlineLoading3Quarters />
            </span>
            <Text>Loading...</Text>
        </div>
    )
}
