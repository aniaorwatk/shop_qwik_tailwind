import { component$, useStore} from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';


export default component$(() => {
const store = useStore({
  scrolled: false
})

  return (
    <header class={"fixed top-0 left-0 w-full flex justify-between items-center p-4 text-white text-xl sm:text-4xl sm:p-8 z-20" + (store.scrolled ? " bg-slate-700 shadow" : " bg-transparent")}
    document:onScroll$={()=>{
      if (window.scrollY > 0){
        store.scrolled =true
      } else {
        store.scrolled =false
      }
    }}
    >
<h1>Porcelanin</h1>
<div class="text-xl sm:text-3xl">
<i class="fa-solid fa-cart-shopping"></i>  
</div>

    </header>
  );
});
