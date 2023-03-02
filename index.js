//create a LinkedList factory the is the full list

//create factory function that will create a node containing data and pointer to next node. both null by default

/////////// add prototypes to function that do the following: ////////////
//append a new node to end of list DONE
//prepend a value to the start of the list DONE
//return the size of the list DONE
//return the head of the list DONE
//return the tail of the list DONE
//return the node at a given index DONE
//pop the last node from the list DONE
//return true if a node contains a given value, else false DONE
//return the index of the node containing given value DONE
//convert objects data to a string and display in console DONE

//EXTRA CREDIT
//insert a new node at a given index (value, index) DONE
//remove a node at a given index DONE

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    getByIndex(index) {
        if (index < 0 || index >= this.length) return null;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    insertAtHead(data) {
        const newNode = new Node(data, this.head)
        this.head = newNode;
        this.length++;
    }

    removeHead() {
        this.head = this.head.next;
        this.length--
    }

    append(data) {
        if (this.length == 0) return this.insertAtHead(data);
        const tail = this.getByIndex(this.length - 1)
        tail.next = new Node(data, tail.next)
        this.length++
    }

    pop() {
        let newTail = this.getByIndex(this.length - 2);
        newTail.next = null
        this.length--
    }

    insertAtIndex(index, value) {
        if (index == 0) return this.insertAtHead(value);

        const prev = this.getByIndex(index - 1);
        if (prev == null) return null

        prev.next = new Node(value, prev.next)
        this.length++
    }

    removeAtIndex(index) {
        if (index == 0) return [this.removeHead(), this.length--];

        const prev = this.getByIndex(index - 1);
        if (prev == null) return null

        prev.next = prev.next.next
        this.length--
    }

    print() {
        let output = ''
        let current = this.head
        while (current) {
            output = `${output}${current.value} -> `
            current = current.next
        }
        console.log(`${output}null`)
    }

    printLength() {
        console.log(`The length of the list is ${this.length}`);
    }

    printHead() {
        console.log(`The head value is ${this.head.value}`);
    }

    printTail() {
        let tail = this.getByIndex(this.length - 1);
        console.log(`The tail value is ${tail.value}`)
    }

    printIndex(index) {
        let indexNode = this.getByIndex(index - 1)
        console.log(`The value at node number ${index} is ${indexNode.value}`)
    }

    nodeContains(index, data) {
        let node = this.getByIndex(index - 1);
        if (node.value == data) {
            return true;
        } else {
            return false;
        }
    }

    printNodeWithData(data) {
        let node = null;
        for (let i = 0; i < this.length; i++) {
            node = this.getByIndex(i);
            if (node.value === data) {
                console.log(`The node at index ${i} (starts at 0) contains the data you entered, ${data}`);
            }
        }
    }
}

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}



const ll = new LinkedList();
ll.append(100)
console.log(ll.length)
ll.print()

ll.insertAtHead(10);
ll.insertAtHead(20);
ll.insertAtHead(30);
ll.insertAtHead(40);
ll.insertAtHead(50);
ll.insertAtHead(60);
ll.insertAtHead(70);
ll.insertAtHead(80);
console.log(ll.length)
ll.print()

ll.insertAtIndex(2, 60);
console.log(ll.length)
ll.print();

ll.removeHead();
console.log(ll.length)
ll.print();

ll.removeAtIndex(3)
console.log(ll.length)
ll.print()

ll.pop()
console.log(ll.length)
ll.print()

ll.printLength();

ll.printHead();

ll.printIndex(4);

ll.printTail();

console.log(ll.nodeContains(4, 40))

console.log(ll.nodeContains(2, 17))

ll.printNodeWithData(60);
ll.printNodeWithData(40);
ll.printNodeWithData(10);
ll.printNodeWithData(623);





// function linkedList() {
//     return 'stuff';
// };

// function node(data) {
//     return {
//         data: data,
//         next: null,
//     }
// };

// linkedList();

// node('John');