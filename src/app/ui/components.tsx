import { TLComponents } from "tldraw"
import { LedActionsMenu, LedContextMenu, LedMainMenu, LedQuickActions, LedStylePanel, LedToolbar } from "./menus"

/**
 * Led Tldraw 容器
 */
export const LedTLWComponents: TLComponents = {
	ActionsMenu: LedActionsMenu,
	ContextMenu: LedContextMenu,
	MainMenu: LedMainMenu,
	QuickActions: LedQuickActions,
	StylePanel: LedStylePanel,
	Toolbar: LedToolbar, 
}