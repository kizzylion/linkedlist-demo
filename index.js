import Node from "./node.mjs"
import linkedList from "./linkedlist.mjs"

const ll = new linkedList()

ll.head = new Node(100)
ll.append(200)
ll.prepend(50)
ll.append("kizzy")
ll.append("benit0")
ll.insertAt(30, 5)
ll.print()

ll.toString()
