import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import ProductsGrid from '~/components/products-grid/products-grid';

export default component$(() => {
  return (
    <div class="flex flex-1 flex-col">
      <section class="min-h-screen flex relative">
      <img src="https://www.as.cmielow.com.pl/5291/filizanka-lena-do-herbaty.jpg" alt="cup-home-page" class="object-cover"/>  
      <a href="#products" class="absolute left-1/2 top-2/3 -translate-y-1/2 -translate-x-1/2 p-5 border-4 border-solid border-black">Shop Porcelanin</a>
      </section>
      
      <ProductsGrid/>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Porcelanin',
  meta: [
    {
      name: 'description',
      content: 'Porcelain shop',
    },
  ],
};
