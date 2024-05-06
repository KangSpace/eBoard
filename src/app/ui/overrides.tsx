import { TLUiOverrides } from "tldraw"
import { ledActionOverride } from "./event"

/**
 * 替换Tldraw行为
 */
export const ledOverrides: TLUiOverrides = {
    actions: ledActionOverride
    /* actions(editor, actions) {
        // You can delete actions, but remember to
        // also delete the menu items that reference them!
        delete actions['insert-embed']

        // Create a new action or replace an existing one
        actions['my-new-action'] = {
            id: 'my-new-action',
            label: 'My new action',
            readonlyOk: true,
            kbd: '$u',
            onSelect(source: any) {
                // Whatever you want to happen when the action is run
                window.alert('My new action just happened!')
            },
        }
        return actions
    }, */
}