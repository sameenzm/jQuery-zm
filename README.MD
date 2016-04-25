# 学习jQuery
以深入学习jQuery思路为目的，不追求与jQuery实现完全一致

**_TODO_**

# 应该规避的jQuery的问题
- $('input[type=text]#username').html()方法有效，而在我看来，文本框不应该有html方法，所以不应该存在这样的有效逻辑
- $('div#nav').val()方法有效，而在我看来，div不应该有val方法，所以这个逻辑也不正确
- $('li.list').html()方法返回匹配到的第一个li元素的innerHTML（假设有多个），而在我看来，匹配到多个元素的时候，html是没有意义的，所以这个逻辑也不正确

# 我的改进实现
- 选择器匹配的结果分为三种：ElementList、InputElement、ContainerElement
- ElementList为多个DOM Element集合，支持each遍历，如addClass会对所有匹配到的元素添加样式class
- InputElement为input[type=text]、textarea、button等输入元素，支持特有的val、disabled等方法，不支持html、text等方法
- ContainerElement为div、p等容器元素，支持html、text等方法，不支持val等方法
