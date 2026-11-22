import { Component } from "react";
import './index.css'
import CategoryFilter from '../components/CategoryFilter/index.jsx';
import FoodCard from '../components/FoodCard/index.jsx'
import HeroSection from '../components/HeroSection/index.jsx';
import Navbar from '../components/Navbar/index.jsx';
import Footer from '../components/Footer/index.jsx';

const categories = [
  { id: 1, categoryName: "All" },
  { id: 2, categoryName: "Chicken" },
  { id: 3, categoryName: "Pasta" },
  { id: 4, categoryName: "Vegetarian" },
  { id: 5, categoryName: "Indian" },
  { id: 6, categoryName: "Asian" }
];



const foodItems = [
  // CHICKEN - 10 ITEMS
  {
    id: 1,
    imageUrl: "https://www.themealdb.com/images/media/meals/020z181619788503.jpg",
    itemName: "Ayam Percik",
    price: 249,
    category: "Chicken"
  },
  {
    id: 2,
    imageUrl: "https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg",
    itemName: "Brown Stew Chicken",
    price: 269,
    category: "Chicken"
  },
  {
    id: 3,
    imageUrl: "https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg",
    itemName: "Chicken Sandwich",
    price: 179,
    category: "Chicken"
  },
  {
    id: 4,
    imageUrl: "https://www.themealdb.com/images/media/meals/uuuspp1511297945.jpg",
    itemName: "Chicken Mushroom Hotpot",
    price: 299,
    category: "Chicken"
  },
  {
    id: 5,
    imageUrl: "https://www.themealdb.com/images/media/meals/wruvqv1511880994.jpg",
    itemName: "Chicken Basquaise",
    price: 289,
    category: "Chicken"
  },
  {
    id: 6,
    imageUrl: "https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg",
    itemName: "Chicken Couscous",
    price: 239,
    category: "Chicken"
  },
  {
    id: 7,
    imageUrl: "https://www.themealdb.com/images/media/meals/qtuwxu1468233098.jpg",
    itemName: "Chicken Enchilada Casserole",
    price: 279,
    category: "Chicken"
  },
  {
    id: 8,
    imageUrl: "https://www.themealdb.com/images/media/meals/tyywsw1505930373.jpg",
    itemName: "Chicken Karaage",
    price: 229,
    category: "Chicken"
  },
  {
    id: 9,
    imageUrl: "https://www.themealdb.com/images/media/meals/hcg6l91763596970.jpg",
    itemName: "Chicken Shawarma",
    price: 199,
    category: "Chicken"
  },
  {
    id: 10,
    imageUrl: "https://www.themealdb.com/images/media/meals/vwrpps1503068729.jpg",
    itemName: "Katsu Chicken Curry",
    price: 279,
    category: "Chicken"
  },

  // PASTA - 10 ITEMS
  {
    id: 11,
    imageUrl: "https://www.themealdb.com/images/media/meals/usywpp1511189717.jpg",
    itemName: "Chilli Prawn Linguine",
    price: 299,
    category: "Pasta"
  },
  {
    id: 12,
    imageUrl: "https://www.themealdb.com/images/media/meals/0jv5gx1661040802.jpg",
    itemName: "Fettuccine Alfredo",
    price: 249,
    category: "Pasta"
  },
  {
    id: 13,
    imageUrl: "https://www.themealdb.com/images/media/meals/uquqtu1511178042.jpg",
    itemName: "Classic Alfredo Pasta",
    price: 229,
    category: "Pasta"
  },
  {
    id: 14,
    imageUrl: "https://www.themealdb.com/images/media/meals/xutquv1505330523.jpg",
    itemName: "Grilled Mac and Cheese Sandwich",
    price: 189,
    category: "Pasta"
  },
  {
    id: 15,
    imageUrl: "https://www.themealdb.com/images/media/meals/xr0n4r1576788363.jpg",
    itemName: "Lasagna Sandwich",
    price: 199,
    category: "Pasta"
  },
  {
    id: 16,
    imageUrl: "https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg",
    itemName: "Italian Lasagne",
    price: 289,
    category: "Pasta"
  },
  {
    id: 17,
    imageUrl: "https://www.themealdb.com/images/media/meals/kpiu4t1782242131.jpg",
    itemName: "Macaroni Pie",
    price: 219,
    category: "Pasta"
  },
  {
    id: 18,
    imageUrl: "https://www.themealdb.com/images/media/meals/vvtvtr1511180578.jpg",
    itemName: "Pilchard Puttanesca",
    price: 259,
    category: "Pasta"
  },
  {
    id: 19,
    imageUrl: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
    itemName: "Spaghetti Carbonara",
    price: 269,
    category: "Pasta"
  },
  {
    id: 20,
    imageUrl: "https://www.themealdb.com/images/media/meals/5fu4ew1760524857.jpg",
    itemName: "Syrian Spaghetti",
    price: 239,
    category: "Pasta"
  },

  // VEGETARIAN - 10 ITEMS
  {
    id: 21,
    imageUrl: "https://www.themealdb.com/images/media/meals/3m8yae1763257951.jpg",
    itemName: "Patatas Bravas",
    price: 149,
    category: "Vegetarian"
  },
  {
    id: 22,
    imageUrl: "https://www.themealdb.com/images/media/meals/tbj1bs1764118062.jpg",
    itemName: "Bell Pepper Salad",
    price: 129,
    category: "Vegetarian"
  },
  {
    id: 23,
    imageUrl: "https://www.themealdb.com/images/media/meals/zub3s91764110535.jpg",
    itemName: "Aubergine Hummus Grills",
    price: 199,
    category: "Vegetarian"
  },
  {
    id: 24,
    imageUrl: "https://www.themealdb.com/images/media/meals/02s6gc1763799560.jpg",
    itemName: "Aubergine Couscous Salad",
    price: 189,
    category: "Vegetarian"
  },
  {
    id: 25,
    imageUrl: "https://www.themealdb.com/images/media/meals/flrajf1762341295.jpg",
    itemName: "Avocado Dip with Potatoes",
    price: 179,
    category: "Vegetarian"
  },
  {
    id: 26,
    imageUrl: "https://www.themealdb.com/images/media/meals/xjii2g1784836867.jpg",
    itemName: "Carrot and Bean Fritters",
    price: 159,
    category: "Vegetarian"
  },
  {
    id: 27,
    imageUrl: "https://www.themealdb.com/images/media/meals/tvtxpq1511464705.jpg",
    itemName: "Chickpea Fajitas",
    price: 219,
    category: "Vegetarian"
  },
  {
    id: 28,
    imageUrl: "https://www.themealdb.com/images/media/meals/c7lzrl1683208757.jpg",
    itemName: "Crispy Eggplant",
    price: 179,
    category: "Vegetarian"
  },
  {
    id: 29,
    imageUrl: "https://www.themealdb.com/images/media/meals/u5e9qq1763795441.jpg",
    itemName: "Falafel",
    price: 149,
    category: "Vegetarian"
  },
  {
    id: 30,
    imageUrl: "https://www.themealdb.com/images/media/meals/ae6clc1760524712.jpg",
    itemName: "Falafel Pita Sandwich",
    price: 199,
    category: "Vegetarian"
  },

  // INDIAN - 10 ITEMS
  {
    id: 31,
    imageUrl: "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
    itemName: "Chicken Handi",
    price: 279,
    category: "Indian"
  },
  {
    id: 32,
    imageUrl: "https://www.themealdb.com/images/media/meals/er4d081765186828.jpg",
    itemName: "Chicken Mandi",
    price: 299,
    category: "Indian"
  },
  {
    id: 33,
    imageUrl: "https://www.themealdb.com/images/media/meals/yxsurp1511304301.jpg",
    itemName: "Nutty Chicken Curry",
    price: 269,
    category: "Indian"
  },
  {
    id: 34,
    imageUrl: "https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg",
    itemName: "Tandoori Chicken",
    price: 299,
    category: "Indian"
  },
  {
    id: 35,
    imageUrl: "https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg",
    itemName: "Baingan Bharta",
    price: 179,
    category: "Indian"
  },
  {
    id: 36,
    imageUrl: "https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg",
    itemName: "Dal Fry",
    price: 149,
    category: "Indian"
  },
  {
    id: 37,
    imageUrl: "https://www.themealdb.com/images/media/meals/sywrsu1511463066.jpg",
    itemName: "Rajma Curry",
    price: 189,
    category: "Indian"
  },
  {
    id: 38,
    imageUrl: "https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg",
    itemName: "Matar Paneer",
    price: 229,
    category: "Indian"
  },
  {
    id: 39,
    imageUrl: "https://www.themealdb.com/images/media/meals/4er7mj1598733193.jpg",
    itemName: "Koshari",
    price: 199,
    category: "Indian"
  },
  {
    id: 40,
    imageUrl: "https://www.themealdb.com/images/media/meals/g373701551450225.jpg",
    itemName: "Shakshuka",
    price: 209,
    category: "Indian"
  },

  // ASIAN - 10 ITEMS
  {
    id: 41,
    imageUrl: "https://www.themealdb.com/images/media/meals/1529446352.jpg",
    itemName: "Chicken Congee",
    price: 169,
    category: "Asian"
  },
  {
    id: 42,
    imageUrl: "https://www.themealdb.com/images/media/meals/wuyd2h1765655837.jpg",
    itemName: "Chicken Fried Rice",
    price: 199,
    category: "Asian"
  },
  {
    id: 43,
    imageUrl: "https://www.themealdb.com/images/media/meals/s73ytv1765567838.jpg",
    itemName: "Chinese Orange Chicken",
    price: 249,
    category: "Asian"
  },
  {
    id: 44,
    imageUrl: "https://www.themealdb.com/images/media/meals/1529444113.jpg",
    itemName: "General Tso's Chicken",
    price: 259,
    category: "Asian"
  },
  {
    id: 45,
    imageUrl: "https://www.themealdb.com/images/media/meals/1525872624.jpg",
    itemName: "Kung Pao Chicken",
    price: 249,
    category: "Asian"
  },
  {
    id: 46,
    imageUrl: "https://www.themealdb.com/images/media/meals/arzs741766434335.jpg",
    itemName: "Sweet and Sour Chicken",
    price: 239,
    category: "Asian"
  },
  {
    id: 47,
    imageUrl: "https://www.themealdb.com/images/media/meals/rwvw8q1765660071.jpg",
    itemName: "Chinese Tomato Egg Stir Fry",
    price: 179,
    category: "Asian"
  },
  {
    id: 48,
    imageUrl: "https://www.themealdb.com/images/media/meals/1oz4nb1765687990.jpg",
    itemName: "Sichuan Eggplant",
    price: 199,
    category: "Asian"
  },
  {
    id: 49,
    imageUrl: "https://www.themealdb.com/images/media/meals/j9nray1765657692.jpg",
    itemName: "Silken Tofu with Sesame Sauce",
    price: 189,
    category: "Asian"
  },
  {
    id: 50,
    imageUrl: "https://www.themealdb.com/images/media/meals/wrustq1511475474.jpg",
    itemName: "Yaki Udon Noodles",
    price: 229,
    category: "Asian"
  }
];

class FoodieHub extends Component {
  state = {
    foodItemsCategory : foodItems,
    searchResults:foodItems
  }

  onCategoryClick = (id) => {
    if(id==='All') {
      console.log("All butto clicked")
      console.log(foodItems)
      this.setState({
        foodItemsCategory:foodItems,
        searchResults:foodItems
      })
      return
    }
    const categoryItems = foodItems.filter(item=> {
      return item.category===id
    })
    this.setState({
      foodItemsCategory:categoryItems,
      searchResults:categoryItems
    })
  }

  onSearchInput = (input) => {
    const {foodItemsCategory} = this.state;
    const searchedResults = foodItemsCategory.filter(item=> {
      return item.itemName.toLowerCase().includes(input)
    })
    this.setState({
      searchResults:searchedResults
    })
  }
    render() {
      const {foodItemsCategory,searchResults} = this.state;
        return(
            <>
             <Navbar/>
               <HeroSection onSearchInput={this.onSearchInput}/>
                 <CategoryFilter categories={categories} onCategoryClick={this.onCategoryClick}/>
                   <div className='items'>
                    {searchResults.length===0 ? <h1 className="noitemsfound">No items found</h1> : searchResults.map(eachItem=> {
                        return <FoodCard foodItems={eachItem}/>
                        })}
                  </div>
                <Footer/>
            </>
        )
    }
}

export default FoodieHub