'use client'
import { DefaultColorThemePalette, Tldraw, getUserPreferences, setUserPreferences, useEditor, useUiEvents } from 'tldraw'
import { LedTLWComponents } from './ui/components'
import { SneakyFloatyHook } from './ui/tools'
import ExtIcons from './ui/exticons'
import { handleTlEvent } from './ui/event'
import { useEffect } from 'react'
import { ledOverrides } from './ui/overrides'

const TldrawConfig = {
	// 刷新后保留
	persistenceKey: "led_persistence",
	// 强制移动端模式
	forceMobile: true,
	// 暗黑模式
	inferDarkMode: getUserPreferences().isDarkMode ? true : false,
	// 是否隐藏UI
	hideUi: false,
	// 锁定工具栏
	toolLock: true,
	// 始终吸附
	isSnapMode: true,
	// 显示网格
	// isGridMode:true,
	// 专注模式
	// isFocusMode:false,
	assetUrls: {
		icons: ExtIcons,
	}
}

/**
 * 初始化默认偏好
 */
function initDefaultPreference() {
	// const editor = useEditor();
	setUserPreferences({
		id: "userPreferences",
		locale: 'zh-cn',
		isDarkMode: getUserPreferences().isDarkMode,
		isSnapMode: TldrawConfig.isSnapMode
	})
	// editor.updateInstanceState({
	// 	isToolLocked: TldrawConfig.toolLock,
	// 	// isFocusMode:false
	// });
	console.log('initDefaultPreference加载完成');
}

export default function Home() {
	useEffect(() => {
		initDefaultPreference();
		console.log('组件加载完成');
		return () => {};
	  }, []); 
	return (
		<main>
			<div style={{ position: 'fixed', inset: 0 }}>
				<Tldraw
					persistenceKey={TldrawConfig.persistenceKey}
					forceMobile={TldrawConfig.forceMobile}
					inferDarkMode={TldrawConfig.inferDarkMode}
					hideUi={TldrawConfig.hideUi}
					assetUrls={TldrawConfig.assetUrls}

					components={LedTLWComponents}
					overrides={ledOverrides}
					onUiEvent={handleTlEvent} 
				>
					<SneakyFloatyHook />
				</Tldraw>
			</div>
		</main>
	)
}

