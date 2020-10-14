class Cart {
  constructor() {
      if (localStorage.getItem("cartDatas")) {
          this.cartDatas = JSON.parse(localStorage.getItem("cartDatas"));
      } else {
          this.cartDatas = {};
      }
  }
  saveData(id, num) {
      if (!this.cartDatas[id]) {
          this.cartDatas[id] = num;
      } else {
          this.cartDatas[id] += num;
      }
      localStorage.setItem("cartDatas", JSON.stringify(this.cartDatas));
  }
  showList(id) {
      let oCartList = document.getElementById(id);
      let productDatas = JSON.parse(localStorage.getItem("productDatas"));
      let str = "";
      for (let id in this.cartDatas) {
          str += `<li>
          <img src="${productDatas[id].imgsrc}">
          <span>${productDatas[id].title}</span>
          <span>${this.cartDatas[id]}</span>
          <span>${productDatas[id].price}</span>
          <span>${productDatas[id].price * this.cartDatas[id]}</span></li>`;
      }
      oCartList.innerHTML = str;
  }
}