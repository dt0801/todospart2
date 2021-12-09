var btn = document.querySelector('.btn');
var input = document.querySelector('.input-import');
var ul = document.querySelector('.todos');


// tạo danh sách người chơi
var dsVoter = [];

btn.addEventListener('click',function(){
    if(input.value == ''){
        alert('vui lòng nhập đầy đủ thông tin')
        return false;
        
    }
    // tạo đối tượng người chơi mới
   var nguoichoi =  {
        likes : 0,
        name : input.value,
   }
   
   // thêm người chơi mới vào danh sách người chơi
   dsVoter.push(nguoichoi);

   // reset input
   input.value = "";
   // render lại giao diện
   render(dsVoter)
}) 
function render(ds) {
    //xóa phần tử cũ trên giao diện
    ul.innerHTML = "";

    // lap qua cac phan tu co trong ds nguoi choi
    // lập qua các phần tử có trong danh sách người chơi
    for(var i=0; i<ds.length; i++) {
        //  0 -> 4
        // tạo thẻ li cho từng người chơi
        var li = document.createElement('li');

        // add class cho thẻ li ở trên
        li.classList.add('item')

        // tao HTM content cho the li
        li.innerHTML = `
        <span class="item-id">${ds[i].likes}</span>
        <span class="item-name">${ds[i].name}</span>
        <button class="item-btn" onClick="vote(${i})">vote</button>
        <button class="item-btn" onClick="vote2(${i})">remove</button>
        <button class="item-btn-del" onClick="remove(${i})"><i class='bx bxs-trash' ></i></button>
        `
        // add li cho ul
        ul.appendChild(li);
    }
}
// vote so like
function vote(index) {
    // tang so like cho nguoi choi co vi tri la index
    dsVoter[index].likes++;

    render(dsVoter)

}
function vote2(index) {
    // giam so like cho nguoi choi co vi tri la index
    if(dsVoter[index].likes > 0){
        dsVoter[index].likes--;
        render(dsVoter)
    }
    

}
 // xoa nguoi choi
function remove(index) {
    // xoa nguoi choi co vi tri la index
    dsVoter.splice(index ,1);
    render(dsVoter)
}

// var node = document.createElement('li');
//     // ađd clas cho phần tử li
//     node.classList.add('todos-item')
//     // thêm text cho phàn tử li
//     node.innerHTML =(input.value);

//     // add li vừa tạo cho ul
//     ul.appendChild(node);
//     // reset input
//     input.value = '';
//     // khai báo ds li mới
//      li = document.querySelectorAll('.todos-item')
//     // thêm sự kiện cho từn li trong ds trên
//     for(let item of li){
//         item.addEventListener('click',function(){
//             // xóa li được clcik khỏi ul
//         // item && ul.removeChild(item);
//         })
//     }
