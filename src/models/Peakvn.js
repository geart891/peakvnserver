import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  productId: String,
  productCode: String,
  productGender: String,
  productCategory: String,
  productFeature: [String],
  productPrice: String,
  productName: String,
  productColor: String,
  listingDate: Number,
  location: String,
  productImg: [],
  productSize: [],
  productVnd: String,
});
const ProductModel = mongoose.model('Product', ProductSchema);

const UserSchema = new mongoose.Schema({
  userName: String,
  userPassword: String,
  userEmail: String,
  userPhone: String,
  userAddress: String,
  userGender: String,
  userDOB: String,
  userOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
});
const UserModel = mongoose.model('User', UserSchema);

const OrderSchema = new mongoose.Schema({
  orderUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  orderDate: String,
  orderId: String,
  orderName: String,
  orderAddress: String,
  orderPhone: String,
  orderTotalPrice: String,
  orderPaymentType: String,
  orderItems: [
    {
      itemId: Number,
      itemCode: String,
      itemName: String,
      itemGender: String,
      itemCategory: String,
      itemColor: String,
      itemSize: String,
      itemQuantity: Number,
      itemImg: String,
      itemPrice: String,
    },
  ],
  orderStatus: String,
});
const OrderModel = mongoose.model('Order', OrderSchema);

const ContactSchema = new mongoose.Schema({
  contactName: String,
  contactPhone: String,
  contactEmail: String,
  contactTopic: String,
  contactQuestion: String,
  status: String,
});
const ContactModel = mongoose.model('Contact', ContactSchema);

const surveySchema = new mongoose.Schema({
  answer: [mongoose.Schema.Types.Mixed],
});
const SurveyModel = mongoose.model('Survey', surveySchema);

export { ProductModel, OrderModel, UserModel, ContactModel, SurveyModel };
