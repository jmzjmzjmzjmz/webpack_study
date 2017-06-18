<div class="layer">
    <div> this is <%=name%></div>
    <% for (var i=0;i<arr.length;i++) {%>
      <%=arr[i]%>
    <%}%>
      <img src="${ require('../../imgs/small.jpg')}"/>
      <div>上面的写法是填写图片相对位置的正确写法，否则只有写绝对位置能渲染</div>
</div>