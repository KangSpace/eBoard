`use client`
import { useEffect, useState } from "react";
import { TldrawUiMenuItem, Vec, getUserPreferences, setUserPreferences, uniqueId, useContainer, useEditor, useToasts } from "tldraw";



/**
 * QuickAction: 全屏切换按钮菜单
 */
export function FullScreenToolMenuItem() {
	const [fullScreenSate, setFullScreen] = useState(document.fullscreenElement ? true : false);
	let { addToast } = useToasts();
	function doFullScreen() {
		let element = document.documentElement;
		let newScreenSate = !fullScreenSate;
		if (newScreenSate) {
			if (element.requestFullscreen) {
				element.requestFullscreen();
			}
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			}
		}
		setFullScreen(newScreenSate);
		addToast({
			id: uniqueId(),
			title: `已${newScreenSate?'进入':'退出'}全屏`,
			severity: 'info'
		})
	}
	return (
		<TldrawUiMenuItem
			id="fullScreenBtn"
			label={(fullScreenSate ? '退出' : '') + '全屏'}
			icon={(fullScreenSate ? 'offscreen' : 'fullscreen')}
			readonlyOk
			onSelect={doFullScreen}
		/>
	)
}


/**
 * ActionsMenu: 专注模式菜单
 */
export function FocusModeToolMenuItem() {
	const editor = useEditor();
	let currFocusMode = editor.getInstanceState().isFocusMode;
	const [focusModeState, setFocusMode] = useState(currFocusMode);
	function changeFocusMode() {
		let newFocusModeState = !focusModeState;
		editor.updateInstanceState({
			isFocusMode: newFocusModeState,
		});
		setFocusMode(newFocusModeState);
	}
	return (
		<TldrawUiMenuItem
			id="focusModeToolBtn"
			label={(focusModeState ? '退出' : '') + '专注模式'}
			icon='display'
			readonlyOk
			onSelect={changeFocusMode}
		/>
	)
}

/**
 * ActionsMenu: 清空菜单
 */
export function ClearToolMenuItem() {
	const editor = useEditor();
	function clearHandle() {
		editor.selectAll().deleteShapes(editor.getSelectedShapeIds());
	}
	return (
		<TldrawUiMenuItem
			id="focusModeToolBtn"
			label="清空"
			icon='clear'
			readonlyOk
			onSelect={clearHandle}
		/>
	)
}

/**
 * ActionsMenu: 暗黑切换菜单
 */
export function AppearanceToolMenuItem() {
	// false:dark, true: light
	const [darkSate, setDark] = useState(getUserPreferences().isDarkMode);
	function changeDark() {
		let newDarkSate = !darkSate;
		setUserPreferences({
			isDarkMode: newDarkSate,
			id: "userPreferences"
		});
		setDark(newDarkSate);
	}
	return (
		<TldrawUiMenuItem
			id="appearanceToolBtn"
			label={(darkSate ? '浅色' : '暗黑')}
			icon={(darkSate ? 'lightmode' : 'darkmode')}
			readonlyOk
			onSelect={changeDark}
		/>
	)
}

/**
 * 主页: 返回内容按钮
 */
export function SneakyFloatyHook() {
	const editor = useEditor()
	const container = useContainer()

	useEffect(() => {
		if (!window.screenLeft) {
			window.screenLeft = window.screenX
			window.screenTop = window.screenY
		}

		let x = window.screenLeft ?? window.screenX
		let y = window.screenTop ?? window.screenY

		function updatePositions() {
			const sx = window.screenLeft ?? window.screenX
			const sy = window.screenTop ?? window.screenY

			if (sx !== x || sy !== y) {
				x = sx
				y = sy
				editor.setCamera(new Vec(-x, -y))
			}
		}

		editor.on('tick', updatePositions)

		return () => {
			editor.off('tick', updatePositions)
		}
	}, [editor, container])

	return null
}