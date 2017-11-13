var head = { v: 1, next: null }
head.next = { v: 2, next: null }
head.next.next = { v: 3, next: null }

head.v //1
head.next.v //2
head.next.next.v //3 
