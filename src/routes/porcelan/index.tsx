import { component$, useClientEffect$, useContext, useStore } from '@builder.io/qwik';
import { DocumentHead, useContent, useLocation } from '@builder.io/qwik-city';
import { MyContext } from '~/root';
import { ITypeRoot } from '~/root';

interface ITypePorcelan {
    name?: string,
    price?: string,
    url?: string 
}


export default component$(() => {

    const loc = useLocation();

    const state: ITypePorcelan = useStore({
        name: "",
        price: "",
        url: ""
    });

    const contextState: ITypeRoot = useContext(MyContext)


    useClientEffect$(() => {
        const stringLocalStorage = localStorage.getItem("porc") as string
        const data = JSON.parse(stringLocalStorage)
        state.name = data.name
        state.url = data.url
        state.price = data.price
    });

    useClientEffect$(() => {
        const stringLocalStorage = localStorage.getItem('porcelanin-basket') as string
        if (localStorage.getItem('porcelanin-basket')) {
            contextState.items = [...JSON.parse(stringLocalStorage).items]
        }
    })

    return (
        state ? <div class="flex flex-col gap-4">
            <img src={state.url} alt={state.name} class="object-cover max-w-[600px] relative" />
            <div class="flex justify-between p-4">
                <h2 class="text-xl">{state.name}</h2>
                <p>{state.price}</p>
            </div>
            <button onClick$={() => {
                let currBasket = { items: [] }
                const stringLocalStorage = localStorage.getItem('porcelanin-basket') as string
                if (localStorage.getItem('porcelanin-basket')) {
                    currBasket = JSON.parse(stringLocalStorage)
                }
                [...currBasket.items, state]
                localStorage.setItem('porcelanin-basket', JSON.stringify(currBasket))
                contextState.items = [...(contextState.items as []), state]
            }
            } class="border border-slate-900 border-solid px-8 mx-auto py-2 hover:opacity-50">BUY ITEM</button>
        </div> : null
    );
});
