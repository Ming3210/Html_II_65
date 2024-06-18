// Khởi tạo state
const initialCount :number = 0
 // Khởi tạo hàm rêducerCount

 const B4 = (state = initialCount,action:any)=> {
    switch (action.type) {
        case "INCREASE":
            return state+1
        case "DECREASE":
            return state-1
        default:
            return state
    }
 }
 export default B4