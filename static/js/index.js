document.addEventListener('DOMContentLoaded', () => {
    const targetNode = document.body
    // 配置观察选项
    const config = {
        childList: true,
        subtree: true,
    }
    const observer = new MutationObserver((mutationsList, observer) => {
        console.log('window.open has been overridden')
        // 查询body的子节点不是div,不是header，不是script，不是ul的标签
        const excludedTags = ['DIV', 'HEADER', 'SCRIPT', 'UL']
        const children = Array.from(document.body.childNodes)
        const result = children.filter(
            (el) => el.nodeType === 1 && !excludedTags.includes(el.tagName)
        )
        console.log('result node')
        // 将查询到的标签都隐藏
        result.forEach((tag) => {
            tag.style.display = 'none'
        })
    })
    observer.observe(targetNode, config)
})
