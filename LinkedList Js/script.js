// Lista
class listNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class linkedList {
  constructor(head = null) {
    this.head = head;
  }
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  getFirst() {
    return this.head;
  }

  appendLast(data) {
    let node = this.head;
    if (node) {
      while (node.next) {
        node = node.next;
      }
      node.next = new listNode(data);
    } else {
      this.head = new listNode(data);
    }
  }

  removeNode(data) {
    let node = this.head;
    let aux = this.head;
    if (node.data == data) {
      this.head = node.next;
      return;
    }
    while (node.next.data != data && node.next != null) {
      node = node.next;
    }
    aux = node;
    node.next.next = aux;
    return;
  }
  appendFirst(data) {
    let node = this.head;
    let newNode = new listNode(data);
    if (node) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = new listNode(data);
    }
  }

  showlist() {
    let node = this.head;
    while (node != null) {
      console.log(node.data);
      node = node.next;
    }
  }

  removeElement(element) {
    var current = this.head;
    var prev = null;


    while (current != null) {
        // comparing element with current
        // element if found then remove the
        // and return true
        if (current.data === element) {
            console.log(current.data)

            if (prev == null) {
                this.head = current.next;
            } else {
                prev.next = current.next;
            }
            this.size--;
            return current.element;
        }
        prev = current;
        current = current.next;
    }
    return -1;
}
}

const list = new linkedList();

let buttonSend = document.getElementById("buttonSend");
let buttonDel = document.getElementById("buttonDel");
let table = document.getElementById("bodyTable");
let count = 1;


function execute() {
  list.appendLast(formAdd.elements["nameL"].value);
  formAdd.elements["nameL"].value = "";
  table.innerHTML += `
    <tr>
        <td >${count}</td>
        <td id = "${list.getLast().data}" indexTable = "${count}"  onclick = "returnDataNode(this)">${list.getLast().data}</td>
    <tr>    
    `;
  count++;
  
  
}

function removeRow(row){
    let table = document.getElementById("bodyTable")
    table.deleteRow(row);
    list.showlist();
}

function returnDataNode(data){
     list.removeElement(formDel.elements["nameDel"].value);
     let table = document.getElementById("bodyTable")
    table.deleteRow(row);
    list.showlist();
}

function deleteD(data){
    let index = parseInt(data.indexTable);
    console.log("IndexTable --> " + index);
    console.log("-----------");
   
}

