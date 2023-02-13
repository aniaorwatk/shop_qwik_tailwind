import { component$, useContextProvider, useStore, useStyles$,createContext } from '@builder.io/qwik';
import { QwikCity, QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';
import globalStyles from './global.css?inline';
import { ITypePorcelan } from './routes/porcelan';

export const MyContext =createContext('my-context')

export interface ITypeRoot{
  items?:object | any[] | any | undefined
}

// export interface ITypeRoot{
//   items?: ITypeR[] | undefined
// }

export default component$(() => {

  const state: ITypeRoot =useStore({
    items:[] 
  })

useContextProvider(MyContext,state)

useStyles$(globalStyles);

return (
  <QwikCityProvider>
    <head>
      <meta charSet="utf-8" />
      <link rel="manifest" href="/manifest.json" />
      <RouterHead />

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;800&display=swap" rel="stylesheet"></link>
    </head>
    <body lang="en" class="flex flex-col min-h-screen">
      <RouterOutlet />
      <ServiceWorkerRegister />
    </body>
  </QwikCityProvider>
);
});
