import User from '../models/user.model.js'
// add products to user cart
const addToCart = async (req, res) => { 
  try {
    const { userId, itemId, size } = req.body;
    const userData = await User.findById(userId);
    let cartData = await userData.cartData;
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;     
      }
      else {
        cartData[itemId][size] = 1;
      }
    }
    else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    
    await User.findByIdAndUpdate(userId, { cartData })
    res.json({success:true,message:"Added to cart"})

  } catch (error) {
    res.json({ success: false, message:error.message });
  }
}

// update user cart
const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;
    const userData = await User.findById(userId);
    let cartData = await userData.cartData;
    cartData[itemId][size] = quantity;
    await User.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Cart Updated" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

// get user cart data
const getUserCart = async (req, res) => {
  try {
    const { userId} = req.body;
    const userData = await User.findById(userId);
    let cartData = await userData.cartData;
    res.json({ success: true, cartData , message: "Cart Fetched" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}


export {addToCart,updateCart,getUserCart}