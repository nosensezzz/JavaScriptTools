// Priority Queue

class PriorityQueue {
    constructor(ASE = true){
        this.q = [null];
        this.isAse = ASE; // true min heap tree, false max heap tree
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

        let end = false;
        let curr = this.q[pos];
        let left = this.q[pos*2];
        let right = this.q[pos * 2 + 1];

        while(!end && (left || right)){
            if(left === undefined){
                // compare to right only
                if(this.compare(right, curr)){
                    [ this.q[pos], this.q[pos*2+1] ] = [ this.q[pos*2+1], this.q[pos] ];
                    pos = pos*2+1;
                    curr = this.q[pos];
                    left = this.q[pos*2];
                    right = this.q[pos*2 + 1];
                } else {
                    end = true;
                }

            } else if(right === undefined){
                // compare to left only
                if(this.compare(left, curr)){
                    [ this.q[pos], this.q[pos*2] ] = [ this.q[pos*2], this.q[pos] ];
                    pos = pos*2;
                    curr = this.q[pos];
                    left = this.q[pos*2];
                    right = this.q[pos*2 + 1];
                } else {
                    end = true;
                }

            } else {
                // compare to closer one
                let isLeft;
                if( (this.isAse && left <= right) || (!isLeft && left >= right)){
                    isLeft = true;
                } else {
                    isLeft = false;
                }

                

            }
        }
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