# autocomplete
```autocomplete```可以用来设置是否由浏览器对表单进行自动补全，常见的值有```OFF (关闭自动补全)```、```ON (开启自动补全)```，然而在项目中经常会发现此属性无效，通过查阅MDN，发现这么几段话：

> 默认情况下，浏览器会记录用户网页上提交的输入框的信息。这使得浏览器能够提供自动补全（在用户开始输入的时候给用户提供可能的内容）和自动填充（在加载的时候预先填充某些字段）功能。这些功能通常是默认启用的，但可能涉及用户的隐私，因此浏览器允许用户禁用这些功能。

> 现代浏览器实现了内建的密码管理功能，由于这个原因，许多现代浏览器都不支持在登录字段中设置 autocomplete="off"。

## 阻止回填
通过设置属性值为```new-password```,防止浏览器对该输入框自动进行回填

```html
<!-- 示例 -->
<input type="password" autocomplete="new-password" />

<!-- 兼容 -->
<form action="" id="form" autocomplete="new-password">
    <input type="password" style="width:0;height:0;float:left;visibility:hidden" />
    <!-- 原先的input -->
    <input type="text" id="password" autocomplete="new-password" />
    <button type="button" id="button">提交</button>
</form>
<script>
    let a = '';
    document.querySelector('#button').addEventListener('click', function () {
        let pas = document.querySelector('#password');
        a = pas.value;
        pas.value = '';
        pas.type = 'text';
        location.href = "https://www.baidu.com";
    })
</script>
```

