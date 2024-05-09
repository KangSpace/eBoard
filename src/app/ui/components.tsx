'use client'
import { Box, StoreSnapshot, TLComponents, TLPageId, TLRecord, TldrawImage, TldrawUiButton, TldrawUiButtonIcon, useTranslation } from "tldraw"
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
	// TopPanel: LedTopPanel
}

function LedTopPanel() {
	const msg = useTranslation()
	// 退出全屏
	function exitFullscreen() {

	}
	// 获取当前状态
	return (
		<div
			style={{
				// backgroundColor: 'thistle',
				width: '100%',
				textAlign: 'center',
				padding: '2px',
				minWidth: '200px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}
			className="exit_full_screen_panel"
		>
			<TldrawUiButton
				type="icon"
				className="tlui-focus-button"
				title='退出全屏'
				onClick={exitFullscreen}
			>
				<TldrawUiButtonIcon icon="offscreen" /><span style={{ width: '10px' }}></span>   退出全屏
			</TldrawUiButton>
		</div>
	)
}

/**
 * 全屏预览
 */
export function LedFullScreenView (snapshot: StoreSnapshot<TLRecord>, currentPageId: TLPageId,
	showBackground: boolean, isDarkMode: boolean, viewportPageBounds: Box, format: "png" | "svg") {
	return (
		<div style={{ position: 'fixed', inset: 0 }}>
		<TldrawImage
			snapshot={snapshot}
			pageId={currentPageId}
			background={showBackground}
			darkMode={isDarkMode}
			bounds={viewportPageBounds}
			padding={0}
			scale={1}
			format={format}
		/>
		</div>
	)
}