import React, { useState } from "react";
import "./App.css";

const App = () => {

const foodItems = [
  { id: 1, name: "Pizza", price: 150, rating: 4.5, img: "https://pd.w.org/2023/10/951652890698b2090.23843031.jpg" },
  { id: 2, name: "Burger", price: 200, rating: 4.2, img: "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1%3A1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg" },
  { id: 3, name: "Biryani", price: 249, rating: 4.6, img: "https://img.pikbest.com/png-images/20241230/close-up-chicken-biryani-served-on-plate-with-aromatic-flavors_11322785.png%21w700wp" },
  { id: 4, name: "Dosa", price: 70, rating: 4.3, img:  "https://media-assets.swiggy.com/swiggy/image/upload/f_auto%2Cq_auto%2Cfl_lossy/t2rzo4ezioyphq6ryear"},
  { id: 5, name: "Ice Cream", price: 120, rating: 4.4, img: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=500&q=60" },

  { id: 6, name: "Pasta", price: 229, rating: 4.1, img: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=500&q=60" },
  { id: 7, name: "Noodles", price: 100, rating: 4.0, img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=500&q=60" },
  { id: 8, name: "Sandwich", price: 149, rating: 4.2, img: "https://www.eatingwell.com/thmb/DyKgzSjEQrGnVXTgWqJPvT440p4%3D/1500x0/filters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29/EWL-SEO-62-Cucumber-and-Tomato-Sandwich-Hero-9340-1-08b645675bc54b95b0aa83676073c986.jpg" },
  { id: 9, name: "Fried Rice", price: 189, rating: 4.3, img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=500&q=60" },
  { id: 10, name: "Paneer Butter Masala", price: 259, rating: 4.7, img: "https://mealpractice.b-cdn.net/47023705355849728/paneer-tikka-masala-with-garlic-naan-bpst8g22r6.webp" },

  { id: 11, name: "Chicken Curry", price: 299, rating: 4.6, img: "https://www.seriouseats.com/thmb/xeTFS0aMf2G_a7Es7SJ_Zgb5FDk%3D/1500x0/filters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2011__12__20111227-indian-curry-610-4142c3c6f67d4702b51518dd17fa41c2.jpg" },
  { id: 12, name: "Momos", price: 129, rating: 4.1, img: "https://cdn.shopify.com/s/files/1/0551/8009/9722/files/1_6faa1227-cf95-4c15-9bac-3da6eedfc4b1_480x480.png?v=1716740370" },
  { id: 13, name: "Samosa", price: 30, rating: 4.0, img: "https://www.foodnetwork.com/content/dam/images/food/fullset/2021/08/3/0/FN_SAMOSAS_W_TAMARIND_CHUTNEY_H_f_s4x3.jpg" },
  { id: 14, name: "Vada Pav", price: 25, rating: 4.2, img: "https://www.spicewallabrand.com/cdn/shop/articles/Image_from_iOS_2_37a5e87e-518e-49c0-8887-d9dba0764a05.jpg?v=1605563261" },
  { id: 15, name: "Chole Bhature", price: 140, rating: 4.5, img: "https://cdn.uengage.io/uploads/28289/image-674446-1746179354.jpeg" },

  { id: 16, name: "Pani Puri", price: 50, rating: 4.4, img: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Pani_Puri1.JPG" },
  { id: 17, name: "Idli", price: 60, rating: 4.1, img: "https://shriandsam.com/cdn/shop/articles/yummy-chutney-recipes-for-idli-and-dosas-7450093.png?v=1763361815&width=2240" },
  { id: 18, name: "Upma", price: 80, rating: 3.9, img: "https://www.seriouseats.com/thmb/syRT544tlIDwO_wpCc0N7ey9w4Q%3D/1500x0/filters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2012__05__20121405-Sooji-Upma-20Indian-Breakfast-21e04a2320de433eb5906cb71caa2b70.jpg" },
  { id: 19, name: "Tandoori Chicken", price: 250, rating: 4.8, img: "https://www.allrecipes.com/thmb/ygY1JXP8_IkDSjPPW5VH2dTiMMU%3D/1500x0/filters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149.jpg" },
  { id: 20, name: "Kebab", price: 200, rating: 4.5, img: "https://png.pngtree.com/png-clipart/20250104/original/pngtree-traditional-seekh-kebab-platter-with-fresh-salad-png-image_19983484.png" },

  { id: 21, name: "Paratha", price: 70, rating: 4.0, img: "https://media.chefdehome.com/740/0/0/aloo-paratha/aloo-paratha-butter-photgraphy.jpg" },
  { id: 22, name: "Rajma Rice", price: 150, rating: 4.3, img: "https://media-assets.swiggy.com/swiggy/image/upload/f_auto%2Cq_auto%2Cfl_lossy/RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/4bc29e8a-17f5-4ed7-893e-31c2cf3348e9_1167642.jpg" },
  { id: 23, name: "Manchurian", price: 170, rating: 4.2, img: "https://images.picxy.com/cache/2020/6/17/b9b74c37bf8653534be6957d29696f9f.jpg" },
  { id: 24, name: "Spring Roll", price: 130, rating: 4.1, img: "https://cdn.apartmenttherapy.info/image/upload/f_jpg%2Cq_auto%3Aeco%2Cc_fill%2Cg_auto%2Cw_1500%2Car_1%3A1/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2022-01-Spring-Rolls%2FVegetarian_Spring_Rolls-2" },
  { id: 25, name: "Milkshake", price: 110, rating: 4.4, img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=60" },

  { id: 26, name: "Falooda", price: 140, rating: 4.3, img: "https://images.immediate.co.uk/production/volatile/sites/30/2024/02/Rose-falooda-b92944d.jpg"},
  { id: 27, name: "Brownie", price: 150, rating: 4.6, img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=60" },
  { id: 28, name: "Cupcake", price: 90, rating: 4.2, img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=500&q=60" },
  { id: 29, name: "Cheese Balls", price: 160, rating: 4.1, img: "https://png.pngtree.com/thumb_back/fh260/background/20251125/pngtree-golden-fried-cheese-balls-with-creamy-filling-appetizing-close-up-of-image_20577613.webp" },
  { id: 30, name: "Hot Dog", price: 180, rating: 4.0, img: "https://www.foodrepublic.com/img/gallery/the-national-hot-dog-council-has-strict-rules-for-topping-etiquette/l-intro-1688983282.jpg" },

  { id: 31, name: "French Fries", price: 120, rating: 4.3, img: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=500&q=60" },
  { id: 32, name: "Nachos", price: 200, rating: 4.4, img: "https://static.toiimg.com/thumb/53772061.cms?height=800&imgsize=247738&width=800" },
  { id: 33, name: "Tacos", price: 220, rating: 4.5, img: "https://images.freeimages.com/images/premium/previews/4275/42755154-mexican-beef-tacos-close-up-photo.jpg" },
  { id: 34, name: "Donut", price: 100, rating: 4.2, img: "https://cdn.apartmenttherapy.info/image/upload/f_jpg%2Cq_auto%3Aeco%2Cc_fill%2Cg_auto%2Cw_1500%2Car_1%3A1/k%2Farchive%2Fc4637db1a78eec50564c260bb357aa07ec725d27" },
  { id: 35, name: "Croissant", price: 130, rating: 4.1, img: "https://previews.123rf.com/images/lenyvavsha/lenyvavsha1706/lenyvavsha170600303/81077617-delicious-butter-croissant-with-fresh-berries-close-up-on-a-plate-horizontal.jpg" },

  { id: 36, name: "Sushi", price: 400, rating: 4.7, img: "https://png.pngtree.com/png-vector/20240420/ourmid/pngtree-sushi-top-view-japanese-healthy-sushi-png-image_12154806.png" },
  { id: 37, name: "Steak", price: 500, rating: 4.8, img: "https://www.australianbeef.com.au/contentassets/f3ac919f5958415f91c29b8c25ac827d/porterhouse-775x775.jpg" },
  { id: 38, name: "Salad", price: 180, rating: 4.0, img: "https://www.allrecipes.com/thmb/q4RuqYYq9icLAG5E3O5cvGAA9Cs%3D/1500x0/filters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29/397065-italian-leafy-green-salad-Alberta-Rose-4x3-1-e9f26ee7a4084f61a4fe0a42e72fa0be.jpg" },
  { id: 39, name: "Soup", price: 120, rating: 4.1, img: "https://www.allrecipes.com/thmb/p4F_knUDCrUNusNOTyjY_dCp8d4%3D/1500x0/filters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29/13338-quick-and-easy-vegetable-soup-DDMFS-4x3-402702f59e7a41519515cecccaba1b80.jpg" },
  { id: 40, name: "Pancake", price: 150, rating: 4.3, img: "https://www.whiskware.com/cdn/shop/articles/yagv0pn15omlwkgpgrbk.jpg?v=1617665208&width=2000" },

  { id: 41, name: "Waffles", price: 170, rating: 4.4, img: "https://www.allrecipes.com/thmb/IBennwyqrqVrOQrgfU5fpk__tgI%3D/1500x0/filters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29/65691-Pumpkin-Waffles-With-Apple-Cider-Syrup-3x4-0468-f74d0640f1764522b88388e7138c7702.jpg" },
  { id: 42, name: "Gulab Jamun", price: 80, rating: 4.6, img: "https://i.pinimg.com/736x/bb/01/a5/bb01a59790d503f36fb5d73742ebd84b.jpg" },
  { id: 43, name: "Rasgulla", price: 80, rating: 4.5, img: "https://www.thespruceeats.com/thmb/LRHVkNnPFRGjN5LixQWD1C9Pnjw%3D/1500x0/filters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29/rasgulla-indian-dessert-1957839-hero-01-7c3528a2d34a4f1b9248c7483a73d0a6.jpg" },
  { id: 44, name: "Halwa", price: 90, rating: 4.2, img: "https://cdn1.foodviva.com/static-content/food-images/desserts-sweets-recipes/gajar-halwa-recipe/gajar-halwa-recipe.jpg" },
  { id: 45, name: "Lassi", price: 70, rating: 4.4, img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=60" },

  { id: 46, name: "Cold Coffee", price: 130, rating: 4.3, img: "https://www.savoryonline.com/app/uploads/recipes/218753/iced-coffee-floats-640x640-c-center.jpg" },
  { id: 47, name: "Tea", price: 20, rating: 4.0, img: "https://www.teacupsfull.com/cdn/shop/articles/Screenshot_2023-09-05_at_7.00.35_PM.png?v=1693987070&width=1100" },
  { id: 48, name: "Coffee", price: 40, rating: 4.2, img: "https://www.melbournecoffeebeans.com/cdn/shop/articles/How_Many_Coffee_Beans_In_A_Shot-_The_Perfect_Espresso.png?v=1741424277" },
  { id: 49, name: "Mango Juice", price: 60, rating: 4.3, img: "https://media.sciencephoto.com/image/c0396259/800wm/C0396259-Fresh_mango_and_glass_of_juice%2C_illustration.jpg" },
  { id: 50, name: "Orange Juice", price: 60, rating: 4.1, img: "https://plus.unsplash.com/premium_photo-1675667390417-d9d23160f4a6?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000"},
];
  


const [search,setSearch] = useState("");
const [cart,setCart] = useState([]);

const addToCart = (item) =>{
setCart([...cart,item]);
};

const totalPrice = cart.reduce((sum,item)=> sum + item.price,0);

const filteredItems = foodItems.filter(item =>
item.name.toLowerCase().includes(search.toLowerCase())
);

return (

<div className="main">

<h1 className="title">Zomato Food Search</h1>

<input
type="text"
placeholder="Search food..."
className="search"
onChange={(e)=>setSearch(e.target.value)}
/>

<h2 className="cartCount">🛒 Cart Items : {cart.length}</h2>

<div className="grid">

{filteredItems.map(item=>(
<div className="card" key={item.id}>

<img src={item.img} alt={item.name} />

<h3>{item.name}</h3>

<p className="price">₹{item.price}</p>

<p className="rating">⭐ {item.rating}</p>

<button
className="btn"
onClick={()=>addToCart(item)}
>
Add to Cart
</button>

</div>
))}

</div>

<div className="cartBox">

<h2>Your Cart</h2>

{cart.map((item,index)=>(
<p key={index}>{item.name} - ₹{item.price}</p>
))}

<h3>Total Price : ₹{totalPrice}</h3>

</div>

</div>

);
};

export default App;