import Link from "next/link";
import { TldrawUiMenuItem, useDialogs } from "tldraw";
import { addLedDialog } from "./dialog";
import { AppInfo, Author } from "../info";

export default function AboutContextMenuItem() {
    let { addDialog } = useDialogs();
    let label = `关于 ${AppInfo.name}`;
    let body = (<>
                <p> {AppInfo.description} </p> 
                <p> Powered by <Link href={Author.url} target="_blank"> {Author.name} </Link> </p>
               </>);
    return (
        <TldrawUiMenuItem
            id="aboutledBtn"
            label={label}
            icon="external-link"
            readonlyOk
            onSelect={() => {
                addLedDialog(addDialog, { title: label, body: body });
            }}
        />
    )
}