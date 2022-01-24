function Node(val, index, next) {
    this.val = val;
    this.index = index;
    this.next = next;
}

function mergeVector(l1, l2) {
    if(!l1 || !l2) {
        return null
    }
    
    let newHead = new Node(0,-1);
    let currNode = newHead;
    let p=l1;
    let q=l2;
    
    
    while(p || q) {
        
        if(p.index === q.index) {
            currNode.next = new Node(p.val + q.val, p.index);
            p = p.next;
            q = q.next;
            
        } else if(p.index < q.index) {
            currNode.next = new Node(p.val, p.index);
            p = p.next
            
        } else if(p.index > q.index) {
            currNode.next = new Node(q.val, q.index);
            q = q.next;
        }
        currNode = currNode.next;
    }
    return newHead.next;
}
// [1,0,3,0,0,0,0,2,0,0] [1,2,3,0,0,0,0,2,0,0]
let l1 = new Node(1,0, new Node(3,2, new Node(2,7)));
let l2 = new Node (1,0, new Node(2,1, new Node(3,2, new Node(2,7))))
console.log('result: ', mergeVector(l1, l2))