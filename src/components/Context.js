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
      }
    ]
  }

  render() {
    const { products } = this.state;

    return (
      <DataContext.Provider value={{ products }}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
