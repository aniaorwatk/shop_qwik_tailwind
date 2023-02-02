import { component$, useClientEffect$, useContext, useStore } from '@builder.io/qwik';
import { DocumentHead, useContent, useLocation } from '@builder.io/qwik-city';
import { MyContext } from '~/root';


export default component$(() => {

    const loc = useLocation();

    const state = useStore({
        name: "",
        price: "",
        url: ""
    });

    const contextState = useContext(MyContext);
    console.log(contextState)

    useClientEffect$(() => {
        const data = JSON.parse(localStorage.getItem("porc"))
        state.name = data.name
        state.url =data.url
        state.price= data.price
    });

    useClientEffect$(()=>{
        if (localStorage.getItem('porcelanin-basket')){
            contextState.items =[...JSON.parse(localStorage.getItem('porcelanin-basket')).items]
        }
    })

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
                currBasket.items.push(state)
                localStorage.setItem('porcelanin-basket', JSON.stringify(currBasket))
                contextState.items =[...contextState.items, state]
            }

            } class="border border-slate-900 border-solid px-8 mx-auto py-2 hover:opacity-50">BUY ITEM</button>
          {/* {contextState.items.map((element)=>{
            return <div>{element.name}</div>
          })} */}
        </div>
    );
});

export const head: DocumentHead = {
    title: 'Qwik Flower',
};
