import { action, computed, persist } from "easy-peasy"

const cartModel=persist({
    cart:[],
    addToCart: action(({cart},payload,)=>{

        const itemExist=cart.findIndex(item=>item._id==payload._id)

        if(itemExist != -1){
            cart[itemExist].quantity =cart[itemExist].quantity+1
        }else{
            const item={...payload,quantity:1}
            cart.push(item)
        }


        
    }),
    removeFromCart: action(({cart},payload,)=>{

        const itemExist=cart.findIndex(item=>item._id==payload._id)

        if(itemExist != -1){
            cart[itemExist].quantity =cart[itemExist].quantity-1
        }


        
    }),
    totalQuantity: computed((state)=>{
        const total=state.cart?.reduce((acc,cur)=>{
            acc = acc+cur.quantity
            return acc
        },0)
        return total
    }),
    grandTotal: computed((state)=>{
        const total=state.cart?.reduce((acc,cur)=>{
            const polishedPrice=parseInt(cur.productPrice.replace("$", ""));
            const itemTotal=polishedPrice*cur.quantity
            acc = acc+itemTotal
            return acc
        },0)
        return total
    }),
    deleteFromCart: action((state,payload)=>{
        console.log(payload,state.cart)
        state.cart=state.cart.filter(item=>item._id != payload)
        // console.log(cart)
    })
})

export default cartModel