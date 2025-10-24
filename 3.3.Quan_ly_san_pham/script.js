let products = [
    "Sony Xperia",
    "Samsung Galaxy",
    "Nokia 6",
];

function displayProducts() {
    let tableBody = document.querySelector("#productTable tbody");
    tableBody.innerHTML = "";

    products.forEach((product, index) => {
        let row = `
        <tr>
            <td>${index + 1}</td>
            <td>${product}</td>
            <td>
            <button class="edit-btn" onclick="editProduct(${index})">Sửa</button>
            <button class="delete-btn" onclick="deleteProduct(${index})">Xóa</button>
            </td>
        </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function addProduct() {
    let newProduct = document.getElementById("newProduct").value.trim();
    if (newProduct === "") {
        alert("Nhập tên sản phẩm:");
        return;
    }
    products.push(newProduct);
    document.getElementById("newProduct").value = "";
    displayProducts();
    alert("Đã thêm sản phẩm mới.");
}

function editProduct(index) {
    let newName = prompt("Nhập tên mới cho sản phẩm:", products[index]);
    if (newName !== null && newName.trim() !== "") {
        products[index] = newName.trim();
        displayProducts();
        alert("Cập nhật sản phẩm.");
  }
}

function deleteProduct(index) {
    let confirmDelete = confirm(`Bạn muốn xóa "${products[index]}" không?`);
    if (confirmDelete) {
        products.splice(index, 1);
        displayProducts();
        alert("Đã xóa sản phẩm.");
    }
}

displayProducts();
