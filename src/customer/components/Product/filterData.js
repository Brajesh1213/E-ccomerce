


export const color = [
    "white",
    "Black",
    "Red",
    "Marun",
    "Being",
    "Pink",
    "Green",
    "Yellow"
    ];
    




export const filters = [
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White'},
        { value: 'beige', label: 'Beige'},
        { value: 'blue', label: 'Blue'},
        { value: 'brown', label: 'Brown'},
        { value: 'green', label: 'Green'},
        { value: 'purple', label: 'Purple'},
      ],
    },
    {
      id: 'category',
      name: 'Category',
      options: [
        { value: 'new-arrivals', label: 'New Arrivals'},
        { value: 'sale', label: 'Sale'},
        { value: 'travel', label: 'Travel'},
        { value: 'organization', label: 'Organization'},
        { value: 'accessories', label: 'Accessories'},
      ],
    },
    {
      id: 'size',
      name: 'Size',
      options: [
        { value: '2l', label: 'L' },
        { value: '6l', label: 'S' },
        { value: '12l', label: 'M' },
        
      ],
    },
]

  
  export  const singleFilter =  [
    {
            id:"price",
            name:"price",
            options:[
                {value:"159-399",label:"₹159 To ₹399"},
                {value:"399-999",label:"399 To ₹999"},
                {value:"999-1999",label:"₹999 To ₹1999"},
                {value:"1999-2999",label:"₹1999 To ₹2999"},
                {value:"2999-4999",label:"₹159 To ₹399"},
            ],
          },
          {

            id:"discount",
            name:"Discount Range",
            options:[
                {value:"10", label:"10% And Above"},
                {value:"20", label:"20% And Above"},
                {value:"30", label:"30% And Above"},
                {value:"40", label:"40% And Above"},
                {value:"50", label:"50% And Above"},
                {value:"60", label:"60% And Above"},
                {value:"70", label:"70% And Above"},
                {value:"80", label:"80% And Above"},
            ]
          },  
          {
            id:"stock",
            name:"Availability",
            options:[
                {value:"in_stock",label:"In Stock"},
                {value:"out_of__stock",label:"out of Stock"}
            ],
          },


];


export const sortOptions = [
    //   { name: 'Most Popular', href: '#', current: true },
    //   { name: 'Best Rating', href: '#', current: false },
    //   { name: 'Newest', href: '#', current: false },
    { name: "Price: Low to High", href: "#", current: false },
    { name: "Price: High to Low", href: "#", current: false },
  ];