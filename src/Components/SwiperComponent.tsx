import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Redux/Hooks";
import { useEffect } from "react";
import { fetchCategories } from "../Redux/categoriesSlice";
import {Swiper,SwiperSlide} from 'swiper/react'
import "swiper/swiper.css";
import {Autoplay} from 'swiper/modules'

function SwiperComponent() {
      const dispatch=useAppDispatch()
      const categories=useAppSelector((state)=>state.categories.items)
      useEffect(()=>{
        dispatch(fetchCategories())
      },[dispatch])
      const categoryImages: Record<string, string> = {
  "mens-shirts": "https://images.pexels.com/photos/1923109/pexels-photo-1923109.jpeg",      
  "mens-shoes": "https://images.pexels.com/photos/293406/pexels-photo-293406.jpeg",               
  "mens-watches": "https://images.pexels.com/photos/2410047/pexels-photo-2410047.jpeg",      
  "womens-dresses": "https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg",  
  "womens-shoes": "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg",     
  "womens-watches": "https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg",   
  "womens-bags": "https://images.pexels.com/photos/7953286/pexels-photo-7953286.jpeg",    
  "beauty": "https://images.pexels.com/photos/2586073/pexels-photo-2586073.jpeg",            
  "furniture": "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",         
  "groceries": "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",      
  "skincare": "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",       
  "home-decoration": "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg", 
  "mobile-accessories": "https://images.pexels.com/photos/248526/pexels-photo-248526.jpeg", 
  "sports-accessories": "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg", 
  "kitchen-accessories": "https://images.pexels.com/photos/4805235/pexels-photo-4805235.jpeg", 
  "tops": "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",           
  "lighting": "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg",          
  "smartphones": "https://images.pexels.com/photos/198192/pexels-photo-198192.jpeg",     
  "laptops": "https://images.pexels.com/photos/207589/pexels-photo-207589.jpeg",                  
  "tablets": "https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg",                  
  "vehicle": "https://images.pexels.com/photos/119435/pexels-photo-119435.jpeg",                   
  "womens-jewellery": "https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg",    
  "sunglasses": "https://images.pexels.com/photos/2659705/pexels-photo-2659705.jpeg",          
  "fragrances": "https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg",          
  "automotive": "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",        
  "motorcycle": "https://images.pexels.com/photos/2549941/pexels-photo-2549941.jpeg",        
  "skin-care": "https://images.pexels.com/photos/3321416/pexels-photo-3321416.jpeg",     
};

  return (
    <div className="w-full h-90 md:h-120 lg:h-120 p-6 flex justify-center items-center">
        <Swiper
        modules={[Autoplay]}
        autoplay={{delay:2000,disableOnInteraction:false}}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          440: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1000: { slidesPerView: 4 },
          1030: { slidesPerView: 4 },
          1050: { slidesPerView: 5 },
          
         
        }}
      >
          {
        categories.map((cat)=>(
             <SwiperSlide key={cat.slug}>
               <Link to={`/category/${cat.slug}`} className=" w-full h-full p-1 font-medium flex flex-col items-center gap-5">
               <div className="w-40 h-40 md:w-40 md:h-40 lg:w-50 lg:h-50 shadow-sm shadow-amber-800  bg-cover bg-center rounded-full flex justify-center items-center transition duration-200 hover:scale-105" style={{backgroundImage: `url(${categoryImages[cat.slug]})`}}>
               </div>
                <span className="text-lg text-amber-900 font-semibold">{cat.name}</span>
                </Link>
               </SwiperSlide>
            
        ))
       }    

      </Swiper>


     
    </div>
  )
}

export default SwiperComponent