import { component$, useClientEffect$, useStore } from '@builder.io/qwik';
// import { QwikLogo } from '../icons/qwik';

export default component$(() => {
  const store = useStore({
    scrolled: false,
    numItems: 0,
    modal: false,
    cart:[]
  })

  // const close = () => {
  //   store.modal = false
  // }

  useClientEffect$(() => {
    if (localStorage.getItem('porcelanin-basket')) {
      const currBasket = JSON.parse(localStorage.getItem('porcelanin-basket'))
      const numItemsInBasket = currBasket.items.length
      store.numItems = numItemsInBasket
      store.cart =currBasket.items
    }
  })

  return (
    <header class={"fixed top-0 left-0 w-full flex justify-between items-center p-4 text-white text-xl sm:text-4xl sm:p-8 z-20" + (store.scrolled ? " bg-slate-700 shadow" : " bg-transparent")}
      document:onScroll$={() => {
        if (window.scrollY > 0) {
          store.scrolled = true
        } else {
          store.scrolled = false
        }
      }}
    >
      <a href='/'>Porcelanin</a><div class="text-xl sm:text-3xl relative cursor-pointer"
        onClick$={() => {
          store.modal = true;
        }}
      >
       <i class="fa-solid fa-cart-shopping"></i>
        {store.numItems > 0 && <div class="absolute top-0 left-6 bg-slate-900 rounded-full h-5 w-5 text-xs grid place-items-center"> {store.numItems}</div>}
      </div>

      {store.modal && <> <div id='modal' class="absolute top-0 right-0 w-full h-screen bg-white z-50 flex flex-col gap-4 p-4 sm:w-[500px] text-slate-900">
        <div class="flex items-center justify-between pb-4 border-b ">
          <h1 class="font-bold text-4xl">CART</h1>
          <i id='modal-close' onClick$={()=>store.modal = false} class="fa-solid fa-xmark cursor-pointer hover:rotate-45"></i>
        </div>
        {store.cart.length > 0 ?
        <div class="bg-slate-400 flex flex-col gap-[1px]">
          {store.cart.map((item)=>{
            return <div class="bg-white p-4 flex items-center justify-between">
              <div class="flex flex-col gap-1">
                <h2>{item.name}</h2>
                <p>{item.price}</p>
                
                 </div>
                 <i class="fa-solid fa-xmark cursor-pointer hover:rotate-45"></i>
               </div>
          })}
          </div>:
        <div><h3 class="text-sm">Your Cart is Empty</h3></div>}
      </div></>}
    </header>
  );
});
