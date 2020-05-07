// Priority Queue

class PriorityQueue {
    constructor(ASE = true){
        this.q = [null];
        this.isAse = ASE;
    }

    compare = (a, b) => {
        if(this.isAse) return a <= b;
        return a >= b;
    };

    push = (num) => {
        this.q.push(num);
        const size = this.q.length - 1;
        let pos = size;
        if(size === 1){
            
        } else if (size <= 3){
            if( this.compare(this.q[pos], this.q[1]) ){
                [ this.q[pos], this.q[1] ] = [ this.q[1], this.q[pos] ];
            }
        } else {
            let parent = pos >> 1;
            let end = false;
            while(!end && parent >= 1){
                if(!this.compare(this.q[pos], this.q[parent])){
                    end = true;
                } else {
                    [ this.q[pos], this.q[1] ] = [ this.q[1], this.q[pos] ];
                    pos = parent;
                    parent = pos >> 1;
                }
            }
        }
    };

    pop = () => {
        // pop the head
        if(this.q.length <= 1) return null;
        const ret = this.q[1];
        this.afterPop();
        return ret;
    };

    afterPop = () => {
        // move last element to head and re-orginaze the tree
        let last = this.q.pop();
        let pos = 1;
        this.q[pos] = last;

        let leftpos = pos * 2;
        let rightpos = pos * 2 + 1;

        
    };
}

//export default PriorityQueue;

let q = new PriorityQueue(false);

console.log(q.q);
q.push(5);
console.log(q.q);
q.push(3);
console.log(q.q);
q.push(8);
console.log(q.q);

q.push(1);
console.log(q.q);