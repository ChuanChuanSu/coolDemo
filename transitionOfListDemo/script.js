/**
 * Created by Su Chuan on 2017/9/5.
 */
let vm = new Vue({
    el:'#transition',
    data:{
        list:Array.apply(null,{length:100})
            .map(function(_,index)
            {return {
                index:index,
                number:index % 10 + 1
            }})
    },
    methods:{
        shuffle:function(){
            this.list = _.shuffle(this.list);
        }
    }
});