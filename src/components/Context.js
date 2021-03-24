import React, { Component } from "react";

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    products: [
      {
        "_id": "1",
        "title": "Nike Air Force 1 '07 LV8",
        "src":
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/a48f681f-ad15-499a-83b8-278640e48365/air-force-1-07-lv8-mens-shoe-LxqPHT.jpg",
        "description": "Rubber gum sole, Perforations on toe and sides",
        "content":
          "From sanded leather that's smoother than backboard glass to bold, NBA-inspired detailing, the Nike Air Force 1 '07 LV8 is everything you know best: crisp overlays, bold accents and the perfect amount of flash to make you shine. Its padded, low-cut collar adds heritage comfort while metal accents deliver an exclamation.",
        "price": 110,
        "colors": ["black", "red", "grey"],
        "count": 1,
      },
      {
        "_id": "2",
        "title": "Air Jordan 1 Mid SE",
        "src":
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/b9f8ba12-aa43-43ef-8f34-a9346a349184/air-jordan-1-mid-se-mens-shoe-47HQdF.jpg",
        "description":
          "Foam midsole, Rubber outsole, Perforated toe, ",
        "content":
          "Highlight your love of history and heritage with the Air Jordan 1 Mid SE. This special edition puts a new twist on Michael Jordan's ultra-famous 1st game shoe. The colorful overlays and collar are edged with black trim to give definition to the classic design.",
        "price": 125,
        "colors": ["black", "red", "yellow"],
        "count": 1,
      },
      {
        "_id": "3",
        "title": "Jordan 6 Rings",
        "src":
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/7f63c886-1507-40d8-9f51-8c5d9c4a7c3a/jordan-6-rings-mens-shoe-X9HJw4.jpg",
        "description":
          "Genuine leather and synthetic leather materials are lightweight and durable.",
        "content":
          "Celebrate the legend of Michael Jordan's outstanding career in the Jordan 6 Rings. The design pulls in elements from game shoes he wore during his 6 championship seasons.",
        "price": 170,
        "colors": ["black", "red", "green"],
        "count": 1,
      },
      {
        "_id": "4",
        "title": "Jordan Spizike 270",
        "src":
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/9155c62e-6d23-4b07-ac85-678ffeb6b758/jordan-spizike-270-mens-boot-31Pcjd.jpg",
        "description": "High padded collar, Modified herringbone traction",
        "content":
          "Featuring details from some of MJ's greatest shoes, the Jordan Spizike 270 Boot celebrates the intersection of Mike, Spike and the legendary ad campaign that brought them together. Made with premium suede and leathers plus cushioning in the heel, this work-inspired boot adds molded details from the AJ4 and the windowed tongue from the AJ6.",
        "price": 200,
        "colors": ["black", "red", "brown"],
        "count": 1,
      },
      {
        "_id": "5",
        "title": "Jordan Zoom '92",
        "src":
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/095e8554-1530-4e9c-88ea-71508401cc64/jordan-zoom-92-mens-shoe-HGMsj5.jpg",
        "description":
          "Lightweight closed-mesh material with structured overlays, Rubberized eyestays",
        "content":
          "A nod to '90s basketball shoes, the Jordan Zoom '92 focuses on comfort while tapping into the irreverent spirit of that era's designs. A stretchy fit sleeve and underfoot cushioning offer a comfortable fit. '90s-inspired details give the shoe its retro flavor.",
        "price": 83,
        "colors": ["black", "red", "blue"],
        "count": 1,
      },
      
      {
        "_id": "6",
        "title": "Kyrie Low 3",
        "src":
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/5bbf3bda-d97a-410d-adac-1de963364cf3/kyrie-low-3-basketball-shoe-4VT0rq.jpg",
        "description":
          " Sail/Black/Team Orange",
        "content":
          "Kyrie Irving's ability to stop, go and cut while handling the ball is unrivaled. The Kyrie Low 3 enables agility and traction in multiple directions while helping keep quick-cutting players locked in over the cushioning. Its low-cut design has aggressive rubber tread that wraps up the sides and a secure midfoot strap for a secure on-court feel.",
        "price": 99.97,
        "colors": ["black", "red", "blue", "yellow"],
        "count": 1,
      },
      {
        "_id": "7",
        "title": "Air Jordan 1 Low",
        "src":
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/f4479d95-3a96-438d-ab38-f8c61d973e6f/air-jordan-1-low-shoe-z3Tl2VeJ.jpg",
        "description":
          "Gym Red/White/Black",
        "content":
          "Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a clean, classic look that's familiar yet always fresh. It's made for casual mode, with an iconic design that goes with everything and never goes out of style.",
        "price": 90,
        "colors": ["black", "red", "blue", "yellow"],
        "count": 1,
      }



      
      

    ],
    cart: [],
    total: 0
  }

  addCart = (id) =>{
    const {products, cart} = this.state;
<<<<<<< HEAD
    const check = cart.every((item) => {
        return item._id !== id
=======




    const check =  cart.every(function(item){
      return item._id !== id
>>>>>>> 15b86c7278a86341b19262b613bcbc4f14ba77bd
    })
    if(check){
        const data = products.filter(product =>{
            return product._id === id
        })
        this.setState({cart: [...cart,...data]})
    }else{
        alert("The product has been added to cart.")
    }
};

reduction = id =>{
    const { cart } = this.state;
    cart.forEach(item =>{
        if(item._id === id){
            item.count === 1 ? item.count = 1 : item.count -=1;
        }
    })
    this.setState({cart: cart});
    this.getTotal();
};

increase = id =>{
    const { cart } = this.state;
    cart.forEach(item =>{
        if(item._id === id){
            item.count += 1;
        }
    })
    this.setState({cart: cart});
    this.getTotal();
};

removeProduct = id =>{
    if(window.confirm("Do you want to delete this product?")){
        const {cart} = this.state;
        cart.forEach((item, index) =>{
            if(item._id === id){
                cart.splice(index, 1)
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    }
   
};

getTotal = ()=>{
    const{cart} = this.state;
    const res = cart.reduce((prev, item) => {
        return prev + (item.price * item.count);
    },0)
    this.setState({total: res})
};

componentDidUpdate(){
    localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
    localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
};

componentDidMount(){
    const dataCart = JSON.parse(localStorage.getItem('dataCart'));
    if(dataCart !== null){
        this.setState({cart: dataCart});
    }
    const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
    if(dataTotal !== null){
        this.setState({total: dataTotal});
    }
}


render() {
    const {products, cart,total} = this.state;
    const {addCart,reduction,increase,removeProduct,getTotal} = this;
    return (
        <DataContext.Provider 
        value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
            {this.props.children}
        </DataContext.Provider>
    )
}
}