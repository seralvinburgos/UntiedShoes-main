# UntiedShoes - A simple, lightweight, and fast shoes store

## Introduction

UntiedShoes is a simple, lightweight, and fast shoes store. It is built with [React](https://reactjs.org/), [Vite](https://vitejs.dev/), [Chakra UI](https://chakra-ui.com/), [Django](https://www.djangoproject.com/), and [Django REST Framework](https://www.django-rest-framework.org/).

## Installation
### Frontend
1. Clone the repository
2. Install dependencies
```bash
npm install
```
3. Run the development server
```bash
npm run dev
```
4. Build the project
```bash
npm run build
```
### Backend
1. Clone the repository
2. Install dependencies
```bash
pip install -r requirements.txt
```
3. Run the development server
```bash
python manage.py runserver
```

## Backend Routes
### Authentication
- Login: `/api/token/`
- Refresh: `/api/token/refresh/`

### Shoes
- List: `/api/shoes/`
- Create: `/api/shoes/`
- Retrieve: `/api/shoes/<int:pk>/`
- Update: `/api/shoes/<int:pk>/`
- Delete: `/api/shoes/<int:pk>/`
- Get by color: `/api/shoes/color/<int:color_id>/`
- Get shoe types: `/api/shoes/types/`
- Get by shoe type: `/api/shoes/type/<int:shoe_type_id>/`
- Get by gender: `/api/shoes/gender/<int:gender_id>/`
- Get shoe brands: `/api/shoes/brands/`
- Get by shoe brand: `/api/shoes/brand/<int:shoe_brand_id>/`

### Coupons
- List: `/api/coupons/`
- Create: `/api/coupons/`
- Update: `/api/coupons/<int:pk>/`
- Retrieve: `/api/coupons/<int:pk>/`
- Delete: `/api/coupons/<int:pk>/`
- Redeem: `/api/coupons/redeem/`

## Ports
- Frontend: 5173
- Backend: 8000
## License
[MIT](https://choosealicense.com/licenses/mit/)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors and acknowledgment
- [Jonathan Mojica](https://github.com/AsyncSpaghettiDev)
- [SerAlvin Burgos](https://github.com/seralvinburgos)
  