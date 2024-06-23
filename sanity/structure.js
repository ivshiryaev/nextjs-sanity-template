import { MdSettings, MdOutlineInsertDriveFile } from "react-icons/md"

function structure(S, context) {
    return S.list()
        .title("Content")
        .items([
            S.documentListItem()
                .id("websiteSettings")
                .title("Website settings")
                .icon(MdSettings)
                .schemaType("websiteSettings"),
            S.divider(),
            S.documentTypeListItem("page")
                .id("pages")
                .icon(MdOutlineInsertDriveFile),
        ])
}

export default structure
