$(document).ready(() => {
  let ckies = document.cookie;
  let list = $("#ft_list");
  if (ckies.length > 0) {
    let ckie = ckies.split(";");
    $.each(ckie, (key, value) => {
      console.log(key, value);
      let todo = value.split("=")[1];
      let newNode = $("<div></div>").text(todo);
      newNode.click()
      list.prepend(newNode);
    });
  }
});
