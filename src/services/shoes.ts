import { http } from '../utils'

export const getShoes = async () => {
  const { data: shoes } = await http.get('shoes/')
  return shoes
}

type GenderType = 'men' | 'women'

export const getShoesByGender = async (gender: GenderType = 'men') => {
  const { data: shoes } = await http.get(`shoes/gender/${gender}/`)
  return shoes
}

export const getShoesByBrand = async (brand: string) => {
  const { data: shoes } = await http.get(`shoes/brand/${brand}/`)
  return shoes
}

export const getShoesByColor = async (color: string) => {
  const { data: shoes } = await http.get(`shoes/color/${color}/`)
  return shoes
}

export const getShoeTypes = async () => {
  const { data: shoeTypes } = await http.get('shoes/types/')
  return shoeTypes
}

export const getShoeBrands = async () => {
  const { data: shoeBrands } = await http.get('shoes/brands/')
  return shoeBrands
}

export const getShoeColors = async () => {
  const { data: shoeColors } = await http.get('shoes/colors/')
  return shoeColors
}

export const getShoe = async (id: number) => {
  const { data: shoe } = await http.get(`shoes/${id}/`)
  return shoe
}
