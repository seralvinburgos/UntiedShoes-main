interface Coupon {
  code: string
  discount: number
  remaining: number
  valid_from: Date
  valid_to: Date
  active: boolean
}

interface Role {
  name: string
  is_staff: boolean
  description: string
}

interface ShippingAddress {
  address: string
  city: string
  state: string
  zipCode: string
}

interface Member {
  id: number
  username: string
  email: string
  role: Role
  shippingAddress: ShippingAddress
}

interface Brand {
  id: number
  name: string
  image: string
}

interface ShoeType {
  id: number
  style: string
}

interface ShoeColor {
  id: number
  color: string
}

interface ShoeGender {
  id: number
  name: string
}

interface Shoe {
  id: number
  model: string
  gender: ShoeGender
  size: number
  brand: Brand
  color: ShoeColor
  material: string
  shoe_type: ShoeType
  quantity: number

  price: number
  image: string
  description: string
}

interface Order {
  user: Member
  shoe: Shoe
  order_type: 'shipping' | 'pickup'
}

interface UserToken {
  username: string
  email: string
  role: string
  is_staff: boolean
  exp: number
}