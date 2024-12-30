import { useState } from 'react'
import Templates1 from './components/templates1'
import Templates2 from './components/templates2'

interface Template {
  id: number
  name: string
  style: {
    coverColor: string
    pageColor: string
    spineGradient: string
  }
}

const templates: Template[] = [
  {
    id: 1,
    name: '复古皮革',
    style: {
      coverColor: 'bg-amber-900',
      pageColor: 'bg-amber-50',
      spineGradient: 'from-amber-800 to-amber-950',
    },
  },
  {
    id: 2,
    name: '典雅黑皮',
    style: {
      coverColor: 'bg-neutral-900',
      pageColor: 'bg-neutral-50',
      spineGradient: 'from-neutral-800 to-neutral-950',
    },
  },
  {
    id: 3,
    name: '深蓝布艺',
    style: {
      coverColor: 'bg-blue-900',
      pageColor: 'bg-blue-50',
      spineGradient: 'from-blue-800 to-blue-950',
    },
  },
]

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template>(
    templates[0]
  )

  return (
    <div className="flex w-screen h-screen">
      {/* 左侧模板区域 */}
      <div className="w-72 bg-white border-r border-gray-200 p-4 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">模板</h2>
        <div className="space-y-4">
          {templates.map((template) => (
            <div
              key={template.id}
              className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                selectedTemplate.id === template.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-500'
              }`}
              onClick={() => setSelectedTemplate(template)}
            >
              <div className="aspect-[4/3] w-full bg-white rounded-md overflow-hidden">
                {/* 模板预览 */}
                <div className="w-full h-full relative flex items-center justify-center">
                  <div
                    className={`w-1/2 h-4/5 ${template.style.coverColor} rounded-sm shadow-book-cover bg-leather-texture bg-leather`}
                  ></div>
                </div>
              </div>
              <div className="mt-2 text-center text-sm font-medium text-gray-700">
                {template.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="flex-1 flex items-center justify-center p-8 bg-gray-100">
        <div className="w-full max-w-4xl aspect-[2/1.4] perspective-[2000px]">
          <div className="relative w-full h-full">
            <div
              className={`absolute left-1/2 top-0 w-8 h-full -translate-x-1/2 bg-gradient-to-r ${selectedTemplate.style.spineGradient} shadow-book-side transform-gpu rotate-y-0 z-20`}
            ></div>

            <div className="absolute left-0 top-0 w-[calc(50%-1rem)] h-full transform-gpu origin-right-center rotate-y-[175deg] transition-transform duration-500">
              <div
                className={`absolute inset-0 ${selectedTemplate.style.pageColor} shadow-book-page`}
              >
                <div className="absolute inset-0 bg-paper-texture bg-paper opacity-30"></div>
              </div>
            </div>

            <div className="absolute right-0 top-0 w-[calc(50%-1rem)] h-full transform-gpu origin-left-center rotate-y-5 transition-transform duration-500">
              <div
                className={`absolute inset-0 ${selectedTemplate.style.pageColor} shadow-book-page`}
              >
                <div className="absolute inset-0 bg-paper-texture bg-paper opacity-30"></div>
                <div className="relative p-8 h-full">
                  <div
                    contentEditable
                    className="w-full h-full outline-none min-h-[200px] text-gray-800"
                  >
                    在这里输入文字...
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute left-0 top-0 w-[calc(50%-1rem)] h-full transform-gpu origin-right-center rotate-y-[-165deg] transition-transform duration-500">
              <div
                className={`absolute inset-0 ${selectedTemplate.style.coverColor} shadow-book-cover bg-leather-texture bg-leather`}
              ></div>
            </div>

            <div className="absolute right-0 top-0 w-[calc(50%-1rem)] h-full transform-gpu origin-left-center rotate-y-[15deg] transition-transform duration-500">
              <div
                className={`absolute inset-0 ${selectedTemplate.style.coverColor} shadow-book-cover bg-leather-texture bg-leather`}
              ></div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="flex-1 flex items-center justify-center">
        {/* <Templates1 /> */}
        <Templates2 />
      </div>

      {/* 右侧参数设置区域 */}
      <div className="w-72 bg-white border-l border-gray-200 p-4 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">设置</h2>
        <div className="space-y-4">
          {/* 文字设置 */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              字体
            </label>
            <select className="w-full border border-gray-300 rounded-md p-2">
              <option>宋体</option>
              <option>黑体</option>
              <option>楷体</option>
            </select>
          </div>

          {/* 字号设置 */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              字号
            </label>
            <input type="range" min="12" max="72" className="w-full" />
          </div>

          {/* 颜色设置 */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              颜色
            </label>
            <input
              type="color"
              className="w-full h-10 p-1 rounded border border-gray-300"
            />
          </div>

          {/* 位置调整 */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              位置
            </label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="number"
                placeholder="X"
                className="border border-gray-300 rounded-md p-2"
              />
              <input
                type="number"
                placeholder="Y"
                className="border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
