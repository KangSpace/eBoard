import { JSX, ReactNode } from "react"
import { DefaultActionsMenu, DefaultActionsMenuContent, DefaultColorStyle, DefaultContextMenu, DefaultContextMenuContent, DefaultMainMenu, DefaultMainMenuContent, DefaultQuickActions, DefaultStylePanel, DefaultStylePanelContent, DefaultToolbar, DefaultToolbarContent, ExportFileContentSubMenu, TLUiContextMenuProps, TLUiStylePanelProps, TldrawUiButton, TldrawUiButtonLabel, TldrawUiMenuGroup, TldrawUiMenuItem, useEditor, useIsToolSelected, useRelevantStyles, useTools } from "tldraw"
import AboutContextMenuItem from "./aboutled"
import { AppearanceToolMenuItem, ClearToolMenuItem, FocusModeToolMenuItem, FullScreenToolMenuItem } from "./tools"


/**
 * Led 主菜单
 */
export function LedMainMenu() {
	
	return (
		<DefaultMainMenu>
			<ExportFileContentSubMenu />
			<AboutContextMenuItem/>
		</DefaultMainMenu>

	)

	/* return (
		<DefaultMainMenu>
			<DefaultMainMenuContent />
			<TldrawUiMenuGroup id="ledMainMenuGroup">
				<TldrawUiMenuItem
					id="like"
					label="Like my posts"
					icon="external-link"
					readonlyOk
					onSelect={() => {
						window.open('https://x.com/tldraw', '_blank')
					}}
				/>
			</TldrawUiMenuGroup>
		</DefaultMainMenu>
	) */
}

/**
 * ActionsMenu: Led操作菜单
 */
export function LedActionsMenu() {
	return (
		<div >
			<DefaultActionsMenu>
				<DefaultActionsMenuContent />
				<AppearanceToolMenuItem />
				<FocusModeToolMenuItem />
				<ClearToolMenuItem />
			</DefaultActionsMenu>
		</div>
	)
}

/**
 * Led右键菜单
 */
export function LedContextMenu(props: TLUiContextMenuProps) {
	return (
		<DefaultContextMenu {...props}>
			<DefaultContextMenuContent />
			<TldrawUiMenuGroup id="ledContextMenuGroup">
				<AboutContextMenuItem />
			</TldrawUiMenuGroup>
		</DefaultContextMenu>
	)
}

/**
 * Led 快捷菜单
 */
export function LedQuickActions() {
	return (
		<DefaultQuickActions>
			<DefaultQuickActions />
			<TldrawUiMenuGroup id="ledQuickActionsGroup">
				<FullScreenToolMenuItem />
			</TldrawUiMenuGroup>
		</DefaultQuickActions>
	)
}

/**
 * Led 样式面板
 */
export function LedStylePanel(props: TLUiStylePanelProps) {
	const editor = useEditor();

	// Styles are complex, sorry. Check our DefaultStylePanel for an example.

	const styles = useRelevantStyles()

	return (
		<DefaultStylePanel {...props}>
			<DefaultStylePanelContent styles={styles} />
			{/* <div>
				<TldrawUiButton
					type="menu"
					onClick={() => {
						editor.setStyleForSelectedShapes(DefaultColorStyle, 'red', { squashing: true })
					}}
				>
					<TldrawUiButtonLabel>Red</TldrawUiButtonLabel>
				</TldrawUiButton>
			</div> */}
		</DefaultStylePanel>
	)
}

/**
 * Led 工具栏
 */
// TODO 
export function LedToolbar(props: JSX.IntrinsicAttributes & { children?: ReactNode }) {
	const editor = useEditor()
	const tools = useTools()
	const isScreenshotSelected = useIsToolSelected(tools['rhombus-2'])
	return (
		<div>
			<DefaultToolbar {...props}>
				<TldrawUiMenuItem {...tools['rhombus-2']} isSelected={isScreenshotSelected} />
				<DefaultToolbarContent />
			</DefaultToolbar>
		</div>
	)
}