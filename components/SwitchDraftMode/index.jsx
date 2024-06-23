import { VisualEditing } from "next-sanity"
import { draftMode } from "next/headers"

export default function SwitchDraftMode() {
    return (
        draftMode().isEnabled && (
            <>
                <a
                    className="fixed z-[99999] bottom-2 left-2 p-2 flex font-semibold text-white items-center bg-blue-400 hover:bg-blue-800"
                    href="/api/disable-draft"
                >
                    Disable Draft mode
                </a>
                <VisualEditing />
            </>
        )
    )
}
