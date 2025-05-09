import type { Component } from '@nordcraft/core/dist/component/component.types'

export function omitSubnodeStyleForComponent<T extends Component | undefined>(
  component: T,
): T {
  const clone = structuredClone(component)
  Object.entries(clone?.nodes ?? {}).forEach(([nodeId, node]) => {
    if (
      (node.type === 'element' || node.type === 'component') &&
      nodeId !== 'root'
    ) {
      delete node.style
      delete node.variants
      delete node.animations
    }
  })

  return clone
}
