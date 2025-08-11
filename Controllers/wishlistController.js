import Wishlist from '../models/Wishlist'

// Add product to wishlist
const addToWishlist = async (req, res) => {
  try {
    const { productId } = req.body;
    const userId = req.user._id; // from JWT middleware

    let wishlist = await Wishlist.findOne({ userId });

    if (!wishlist) {
      wishlist = new Wishlist({ userId, items: [] });
    }

    const alreadyExists = wishlist.items.some(
      item => item.productId.toString() === productId
    );

    if (!alreadyExists) {
      wishlist.items.push({ productId });
      await wishlist.save();
    }

    res.status(200).json({ success: true, wishlist });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get wishlist for logged-in user
const getWishlist = async (req, res) => {
  try {
    const userId = req.user._id;

    const wishlist = await Wishlist.findOne({ userId })
      .populate('items.productId');

    if (!wishlist) {
      return res.status(404).json({ message: 'No wishlist found' });
    }

    res.status(200).json({ success: true, wishlist });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export default {getWishlist,addToWishlist};