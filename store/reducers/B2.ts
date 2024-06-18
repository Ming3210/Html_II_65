const initial : any = [{
    id:1,
    name:"Nguyễn Văn Nam",
    gender:"Nam",
    birth:"20/03/2023",
    address:"Thanh Xuân, Hà Nội"
},{
    id:2,
    name:"Nguyễn Văn B",
    gender:"Nam",
    birth:"20/03/2024",
    address:"Thanh Xuân, Hà Nội"
},
]

const B2 = (state = initial,action:any)=>{
    switch(action.type){
        default:
            return state
    }
}

export default B2;