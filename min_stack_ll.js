var LinkNode = function () {
    this.value = "";
    this.next = null;
    this.nextMin = null;
    this.prevMin = null;
};


/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.head = new LinkNode();
    this.min = null;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    var newNode = new LinkNode();
    newNode.value = x;
    newNode.next = this.head.next;
    this.head.next = newNode;
    if (this.min === null) {
        this.min = newNode;
    }
    else {
        this.min = addToMinStack(this.min, newNode);
    }

};


function addToMinStack(minHeader, node) {
    if (minHeader == null) {
        minHeader = node;
    }
    else {
        var header = minHeader;
        var prev = minHeader.prevMin;

        while (header && header.value < node.value) {
            prev = header;
            header = header.nextMin;
        }


        node.nextMin = header;
        node.prevMin = prev;

        if (node.prevMin === null) {
            minHeader = node;
        }

        if (header) {
            header.prevMin = node;
        }

        if (prev) {
            prev.nextMin = node;
        }

    }

    return minHeader;

}


MinStack.prototype.print = function () {
    var header = this.head.next;
    if (header === null) {
        console.log("Stack Empty!");
    }
    while (header) {
        console.log(header.value);
        header = header.next;
    }
};

MinStack.prototype.printMin = function () {
    var header = this.min;
    if (header === null) {
        console.log("Stack Empty!");
    }
    while (header) {
        console.log(header.value);
        header = header.nextMin;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    var poppedElem = this.head.next;
    var prevMin = poppedElem.prevMin;
    var nextMin = poppedElem.nextMin;

// 	  console.log(poppedElem);
    if (prevMin == null && nextMin == null) {
        this.min = null;
    }

    if (prevMin !== null) {
        prevMin.nextMin = nextMin;
    }
    else {
        this.min = nextMin;
    }

    if (nextMin !== null) {
        nextMin.prevMin = prevMin;
    }

    this.head.next = poppedElem.next;
    return poppedElem.value;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    var topElem = this.head.next;
    if (topElem) {
        return topElem.value;
    }

    return null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    if (this.min) {
        return this.min.value;
    }

    return null;
};


// var myStack = new MinStack();
// myStack.push(2);
// myStack.push(0);
// myStack.push(3);
// myStack.push(0);
//
// console.log("Min : " + myStack.getMin());
// console.log("POPPING : " + myStack.pop());
// console.log("Min : " + myStack.getMin());
// console.log("POPPING : " + myStack.pop());
// console.log("Min : " + myStack.getMin());
// console.log("POPPING : " + myStack.pop());
// console.log("Min : " + myStack.getMin());
