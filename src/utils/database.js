// Items de Menu
export const items = [
  // items categoria rapidas
  {
    id: 1,
    name: "Milanesa de pollo",
    price: 450.5,
    category: "Rapidas",
    count: 1,
  },
  {
    id: 2,
    name: "Milanesa de ternera",
    price: 500.6,
    category: "Rapidas",
    count: 1,
  },
  {
    id: 3,
    name: "Hamburguesa",
    price: 350.7,
    category: "Rapidas",
    count: 1,
  },
  {
    id: 4,
    name: "Pizza napolitana",
    price: 780.1,
    category: "Rapidas",
    count: 1,
  },
  {
    id: 5,
    name: "Pizza calabresa",
    price: 790.2,
    category: "Rapidas",
    count: 1,
  },
  {
    id: 6,
    name: "Empanadas de carne",
    price: 600.2,
    category: "Rapidas",
    count: 1,
  },

  // items categorias platos
  {
    id: 7,
    name: "Ciervo a la cazadora",
    price: 560.45,
    category: "Platos",
  },
  {
    id: 8,
    name: "Trucha al limon",
    price: 780.45,
    category: "Platos",
  },
  {
    id: 9,
    name: "Ñoquis a la bolognesa",
    price: 460.9,
    category: "Platos",
  },
  {
    id: 10,
    name: "Ñoquis a la crema",
    price: 780.3,
    category: "Platos",
  },
  {
    id: 11,
    name: "Ravioles de verdura con filleto",
    price: 800.3,
    category: "Platos",
  },
  {
    id: 12,
    name: "Ravioles de verdura con crema",
    price: 800.3,
    category: "Platos",
  },

  // Items categoria ensaladas
  {
    id: 13,
    name: "Ensalada mixta",
    price: 246.85,
    category: "Ensaladas",
  },
  {
    id: 14,
    name: "Ensalada primavera",
    price: 341.97,
    category: "Ensaladas",
  },
  {
    id: 15,
    name: "Ensalada de trucha",
    price: 350.0,
    category: "Ensaladas",
  },
  {
    id: 16,
    name: "Ensalada César",
    price: 320.47,
    category: "Ensaladas",
  },
  {
    id: 17,
    name: "Ensalada mixta completa",
    price: 462.8,
    category: "Ensaladas",
  },

  // Items categoria postres
  {
    id: 18,
    name: "Lemon pie",
    price: 124.45,
    category: "Postres",
  },
  {
    id: 19,
    name: "Torta selva negra",
    price: 264.87,
    category: "Postres",
  },
  {
    id: 20,
    name: "Flan",
    price: 200.0,
    category: "Postres",
  },
  {
    id: 21,
    name: "Waffle",
    price: 150.5,
    category: "Postres",
  },
  {
    id: 22,
    name: "Helado",
    price: 260.42,
    category: "Postres",
  },
  {
    id: 23,
    name: "Ensalada de fruta",
    price: 148.9,
    category: "Postres",
  },

  // Items categoria Refresco
  {
    id: 24,
    name: "Gaseosa",
    price: 128.9,
    category: "Refresco",
  },
  {
    id: 25,
    name: "Jugo natural",
    price: 110.9,
    category: "Refresco",
  },
  {
    id: 26,
    name: "Cerveza",
    price: 200.9,
    category: "Refresco",
  },
  {
    id: 27,
    name: "Vino",
    price: 150.9,
    category: "Refresco",
  },

  // Items categoria Bebibles
  {
    id: 28,
    name: "Te",
    price: 80.5,
    category: "Bebibles",
  },
  {
    id: 29,
    name: "Capuccino",
    price: 90.9,
    category: "Bebibles",
  },
  {
    id: 30,
    name: "Chocolate",
    price: 70.2,
    category: "Bebibles",
  },
  {
    id: 31,
    name: "Cafe a la crema",
    price: 100.1,
    category: "Bebibles",
  },
  {
    id: 32,
    name: "Cafe expresso",
    price: 120.9,
    category: "Bebibles",
  },
  {
    id: 33,
    name: "Cafe cortado",
    price: 125.8,
    category: "Bebibles",
  },
];

// contenido de comanda

export const platosComanda = [
  { nombre: "Comida Prueba" },
  { nombre: "Comida Prueba" },
  { nombre: "Comida Prueba" },
  { nombre: "Comida Prueba" },
  { nombre: "Comida Prueba" },
  { nombre: "Comida Prueba" },
  { nombre: "Comida Prueba" },
  { nombre: "Comida Prueba" },
];

export const orders = [
  {
    id: 1,
    fecha: "12/05/2020",
    date: "14:55",
    numero: 2,
    mesa: 10,
    dishes: [
      { name: "Comida Prueba 1", price: 250.5, despachado: false },
      { name: "Comida Prueba 2", price: 260.5, despachado: false },
      { name: "Comida Prueba 3", price: 270.5, despachado: false },
    ],
    pendiente: true,
  },
  {
    id: 2,
    fecha: "12/05/2020",
    date: "15:30",
    numero: 3,
    mesa: 11,
    dishes: [
      { name: "Comida Prueba 1", price: 125.8, despachado: false },
      { name: "Comida Prueba 2", price: 260.5, despachado: false },
    ],
    pendiente: true,
  },
  {
    id: 3,
    fecha: "13/05/2020",
    date: "16:20",
    numero: 4,
    mesa: 12,
    dishes: [
      { name: "Cafe cortado", price: 250.5, despachado: false },
      { name: "Ñoquis a la bolognesa", price: 460.9, despachado: false },
    ],
    pendiente: true,
  },
];

export const numberTables = [
  { numero: 1, color: "red" },
  { numero: 2, color: "violet" },
  { numero: 3, color: "white" },
  { numero: 4, color: "pink" },
  { numero: 5, color: "green" },
  { numero: 6, color: "grey" },
  { numero: 7, color: "tomato" },
  { numero: 8, color: "blue" },
  { numero: 9, color: "orange" },
  { numero: 10, color: "brown" },
  { numero: 11, color: "yellow" },
  { numero: 12, color: "red" },
];
