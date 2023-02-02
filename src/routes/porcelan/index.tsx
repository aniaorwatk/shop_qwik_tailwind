import { component$, useClientEffect$, useStore } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';


export default component$(() => {

    const loc = useLocation();

    const state = useStore({
        name: "",
        price: "",
        url: ""
    });

    useClientEffect$(() => {
        const data = JSON.parse(localStorage.getItem("porc"))
        state.name = data.name
        state.url =data.url
        state.price= data.price
    });

    return (
        <div class="flex flex-col gap-4">
            <img src={state.url} alt={state.name} class="object-cover max-w-[600px] relative"/>
            <div class="flex justify-between p-4">
                <h2 class="text-xl">{state.name}</h2>
                <p>{state.price}</p>
            </div>
            <button onClick$={()=>{
                let currBasket ={items:[]}
                if(localStorage.getItem('porcelanin-basket')){
                    currBasket =JSON.parse(localStorage.getItem('porcelanin-basket'))
                }
                currBasket.items.push([state])
                localStorage.setItem('porcelanin-basket', JSON.stringify(currBasket))
            }

            } class="border border-slate-900 border-solid px-8 mx-auto py-2 hover:opacity-50">BUY ITEM</button>
          
        </div>
    );
});

export const head: DocumentHead = {
    title: 'Qwik Flower',
};
