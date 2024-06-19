import Node from "./node.mjs"

export default class linkedList {
  constructor() {
    this.head = null
  }

  //  append(value) adds a new node containing value to the end of the list
  append(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
  }
  // prepend(value) adds a new node containing value to the beginning of the list
  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
  }

  // size return the total number of nodes in the list
  size() {
    let count = 0
    let current = this.head
    while (current) {
      count++
      current = current.next
    }
    return count
  }

  // getHead returns the first node in the list
  getHead() {
    return this.head
  }

  //getTail() returns the last node in the list
  getTail() {
    let current = this.head
    while (current.next) {
      current = current.next
    }
    return current
  }

  // at(index) returns the node at the specified position in the list
  at(index) {
    let current = this.head
    let count = 0
    while (current) {
      if (count === index) {
        return current
      }
      count++
      current = current.next
    }
    throw new Error("index out of bounds")
  }

  // pop() removes the last element from the list
  pop() {
    //if the head is empty, return
    if (!this.head) {
      return null
    }

    let current = this.head
    //if there is only one node
    if (!current.next) {
      this.head = null
      return this.head
    }
    //if there is more than one node
    while (current.next.next) {
      current = current.next
    }
    //eliminate the last link by removing the last link from the second to the last
    current.next = null
  }

  //contains(value) returns true if the passed in value is in the list and otherwise false

  contains(value) {
    let current = this.head
    while (current) {
      if (current.data == value) {
        console.log(true)
        return true
      }
      current = current.next
    }
    console.log(false)
    return false
  }

  //find(value) returns the index of the node containing value, or null if not found.
  find(value) {
    let index = 0
    let current = this.head

    while (current) {
      if (current.data == value) {
        console.log(index)
        return index
      }
      current = current.next
      index++
    }

    console.log("Not found")
    return null
  }

  //toString() represents your LinkedList objects as strings, so you can print them out and preview them in the console.
  //The format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    let result = ""
    let current = this.head
    while (current) {
      result += `(${current.data}) -> `
      current = current.next
    }
    result += "null"
    console.log(result)
    return result
  }

  //insertAt(value, index) that inserts a new node with the provided value at the given index.
  insertAt(value, index) {
    let current = this.head

    if (index < 0) {
      throw new Error("Index must br a non-negative value")
    }

    // if inserted to the head, prepend(value)
    if (index == 0) {
      this.prepend(value)
      return this.head
    }

    //if head is null and the index is not 0
    if (!current && index !== 0) {
      console.log("list is empty")
      throw Error("List is empty")
    }

    let position = 0
    //while head exist,
    // while (current) {
    //   if (position > index) {
    //     console.log("Position is greater than index")
    //     return
    //   }

    //   //if next position == index
    //   let nextPos = position + 1
    //   if (nextPos == index) {
    //     nextNode = current.next
    //     const newNode = new Node()
    //     newNode.next = nextNode
    //     newNode.data = value
    //     current.next = newNode
    //     return
    //   }
    //   current = current.next
    //   position++
    // }

    while (current && position < index - 1) {
      current = current.next
      position++
    }

    if (!current) {
      console.log("Index out of bounds")
      throw Error("index out of bounds")
    }

    const newNode = new Node(value)
    newNode.next = current.next
    current.next = newNode
  }

  //removeAt(index) that removes the node at the given index.
  removeAt(index) {
    if (index === 0) {
      this.head = this.head.next
    }

    let current = this.head
    let position = 0

    while (current && position < index - 1) {
      current = current.next
      position++
    }
    if (!current || !current.next) {
      console.log("Index out of bounds")
    }
    current.next = current.next.next
  }

  // print
  print() {
    let current = this.head
    while (current) {
      console.log(current.data)
      current = current.next
    }
  }
}
