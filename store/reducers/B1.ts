const initial : any = [{
    id:1,
    name:"Nguyễn Văn Nam",
    gender:"Nam",
    birth:"20/03/2023",
    address:"Thanh Xuân, Hà Nội"
}]

const B1 = (state = initial,action:any)=>{
    switch(action.type){
        default:
            return state
    }
}

export default B1;