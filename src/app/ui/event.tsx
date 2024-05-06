`use client`
import { Editor, TLUiActionItem, TLUiActionsContextType, TLUiIconType, TLUiTranslationKey } from "tldraw";

/**
 * 事件相关处理
 */
type StringRegister = {
    [key: string]: any;
};

const EventsRegister: StringRegister = {
    'new-page': (data: any) => {
        console.log("new-page:",data);
        return true;
    }
}

/**
 *  Tldraw 事件处理
 */
export function handleTlEvent(name: string, data: any): boolean {
    console.log(name);
    console.log(EventsRegister[name]);
    return EventsRegister[name] && EventsRegister[name](data);
}

/**
 * Action重写
 */
export function ledActionOverride(editor: Editor, actions: TLUiActionsContextType) {
    // k: string, v: (d: any) => boolean
    Object.keys(EventsRegister).map((k) => {
        let actionK = actions[k]; 
        let tempOnSelect = actionK ? actionK.onSelect : null;
        if (tempOnSelect) {
            delete actions[k];
            actionK.onSelect = (source: any) => {
                let needContinue = false;
                try {
                    needContinue = EventsRegister[k](source);
                } catch (exception) { console.error(exception);}
                if (needContinue && tempOnSelect) tempOnSelect(source);
            }
            actions[k] = actionK;
        }
    });
    return actions;
}