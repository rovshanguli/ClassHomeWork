class myArray {
    
    constructor(){
        this.newarr = [];
        this.foundarr = [];
    }
    myPushFunction(item) {
        this.newarr[this.newarr.length] = item;
        return this.newarr;
    }
    myFindFunction(callback){
        for (const item of this.newarr) {
            if(callback(item)){
                this.foundarr[this.foundarr.length] = item;
            }
        }
        return this.foundarr;
    }
}
let arr = new myArray();
arr.myPushFunction(2);
arr.myPushFunction(5);
arr.myPushFunction(12);
arr.myPushFunction(19);
console.log(arr.newarr);
console.log(arr.myFindFunction(n => n>7));
