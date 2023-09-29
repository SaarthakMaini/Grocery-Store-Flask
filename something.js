x=0;
itemcount=0;


function addingCategory(){
        hm = 'div_' + x;
        del = 'del_' + x;
        itadd = 'itadd_' + x;
        list = 'list_' + x;
        document.getElementById("txt").style.opacity=0;
        let html = "<div style='width: 15rem;display:border-box;' class='card' id='"+ hm +"'><div class='card-body' style='display: flex;flex-direction: column;justify-content: space-between;'><h5 class='card-title' id='Cat1' style='align-self: center;'></h5><div style=' flex-direction: column; width: 100%; display: flex;align-items: center;'><p class='card-text' id = '" + list + "'>Create Products</p><a class='btn btn-primary' style='  width: 50px;height:50px; border-radius: 50%;display: flex;justify-content: center;align-items: center;' onclick='AddItem(this)' id = '" + itadd + "'>+</a></div><div style=' display: flex;justify-content: space-between;'><a  class='btn btn-primary' style='background-color:orange;'>Edit</a><a  class='btn btn-primary' style='background-color:tomato;' onclick='deleteItem(this)' id ='" + del + "'>Delete</a></div></div></div>";
        document.getElementById("hello").insertAdjacentHTML("afterbegin", html);
        var y = document.getElementById("product-name").value;
        document.getElementById("Cat1").innerHTML = y;

        x++;
}

function deleteItem(id){
        var d = id.id;
        document.getElementById(d).parentElement.parentElement.parentElement.remove();
        x=0;
        itemcount=0;

}

function AddItem(id){
        var d =id.id;
        var h ="item_" + itemcount;
        var c ="action_" + itemcount;
        var n ="n" + itemcount;
        var r ="r" + itemcount;
        var q ="q" + itemcount;
        let html = "<div class='card' style='width: 13rem;'><li class='list-group-item' id ='" + h + "'>" + h + "</li><br><button type='button' class='btn btn-primary' data-toggle='modal' data-target='#addProduct' onclick='Actions(this)' id='"+ c +"'>Actions</button></div><div class='modal fade' id='addProduct' tabindex='-1' role='dialog' aria-labelledby='addItemTitle' aria-hidden='true'><div class='modal-dialog modal-dialog-centered' role='document'><div class='modal-content'><div class='modal-body'><h1 id='the-heading'></h1><form><div class='form-group'><label for='message-text' class='col-form-label'>Product Name:</label><textarea class='form-control' id ='" + n + "'></textarea><label for='message-text' class='col-form-label'>Quantity:</label><textarea class='form-control' id ='" + q + "'></textarea><label for='message-text' class='col-form-label'>Rate:</label><textarea class='form-control' id ='" + r + "'></textarea></div></form></div><div class='modal-footer'><button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button><button input='submit' type='button' class='btn btn-primary' onclick='editingitem("+n+","+q+","+r+","+h+")' data-dismiss='modal'>Save</button></div></div></div></div>";
        document.getElementById(d).insertAdjacentHTML("beforebegin", html);
        itemcount++;
}

function Actions(id){
        var d = id.id;
        var text = document.getElementById(d).previousSibling.previousSibling.id; 
        document.getElementById("the-heading").innerHTML = text;
}

function editingitem(n,q,r,h){
        var i1 =n.id;
        var i2 =q.id;
        var i3 =r.id;
        var i4 =h.id;
        var text = document.getElementById(i1).value;
    const e = document.getElementById(i4);
    document.getElementById(i4).textContent = text;
    let quantity = document.getElementById(i2).value;
    let rate = document.getElementById(i3).value;
    let html = "<p> Quantity: " + quantity + "</p>";
    e.insertAdjacentHTML("afterend", html);
    let html2 = "<p> Rate: " + rate + "</p>";
    e.insertAdjacentHTML("afterend", html2);
}