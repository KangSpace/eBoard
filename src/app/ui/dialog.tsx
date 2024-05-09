import { ReactElement, useState } from "react";
import { TLUiDialog, TldrawUiButton, TldrawUiButtonCheck, TldrawUiButtonLabel, TldrawUiDialogBody, TldrawUiDialogCloseButton, TldrawUiDialogFooter, TldrawUiDialogHeader, TldrawUiDialogTitle } from "tldraw";

/**
 * 添加Dialog弹出框
 * @param addDialog 使用 let {addDialog} = useDialogs()
 */
export function addLedDialog(addDialog: (dialog: Omit<TLUiDialog, 'id'> & {
    id?: string;
}) => string, {
    title = '提示',
    body = '',
    cancel,
    confirm,
    displayDontShowAgain = false,
    onCancel,
    onContinue,
}: {
    title?: string
    body?: string | ReactElement
    cancel?: string
    confirm?: string
    displayDontShowAgain?: boolean
    onCancel?: () => void
    onContinue?: () => void
}) {
    addDialog({
        component: ({ onClose }) => (
            <LedDialog title={title} body={body} cancel={cancel} confirm={confirm} displayDontShowAgain={displayDontShowAgain}
                onCancel={() => {
                    if (onClose) onClose();
                }}
                onContinue={() => {
                    if (onContinue) onContinue();
                    onClose();
                }} />
        ),
        onClose: () => {
            if (onCancel) onCancel();
            return void null;
        },
    })
}

/**
 * Dialog弹出框
 */
export function LedDialog({
    title = '提示',
    body = '',
    cancel = '确定',
    confirm,
    displayDontShowAgain = false,
    onCancel,
    onContinue,
}: {
    title?: string
    body?: string | ReactElement
    cancel?: string
    confirm?: string
    displayDontShowAgain?: boolean
    onCancel: () => void
    onContinue: () => void
}) {
    const [dontShowAgain, setDontShowAgain] = useState(false)

    return (
        <>
            <TldrawUiDialogHeader>
                <TldrawUiDialogTitle>{title}</TldrawUiDialogTitle>
                <TldrawUiDialogCloseButton />
            </TldrawUiDialogHeader>
            <TldrawUiDialogBody style={{ maxWidth: 350 }}>{body}</TldrawUiDialogBody>
            <TldrawUiDialogFooter className="tlui-dialog__footer__actions">
                {displayDontShowAgain && (
                    <TldrawUiButton
                        type="normal"
                        onClick={() => setDontShowAgain(!dontShowAgain)}
                        style={{ marginRight: 'auto' }}
                    >
                        <TldrawUiButtonCheck checked={dontShowAgain} />
                        <TldrawUiButtonLabel>Don't show again</TldrawUiButtonLabel>
                    </TldrawUiButton>
                )}
                <TldrawUiButton type="normal" onClick={onCancel}>
                    <TldrawUiButtonLabel>{cancel}</TldrawUiButtonLabel>
                </TldrawUiButton>
                {confirm &&
                    <TldrawUiButton type="primary" onClick={async () => onContinue()}>
                        <TldrawUiButtonLabel>{confirm}</TldrawUiButtonLabel>
                    </TldrawUiButton>
                }
            </TldrawUiDialogFooter>
        </>
    )
}