import { component$ } from '@builder.io/qwik';
import Card from '../card/card';

export default component$(() => {

  const porcel = [
    { name: "Talerz z kolekcji Królów", url: "https://antyki-fortuna.pl/userdata/public/gfx/22025/DSC_0196.jpg", price: "1,001" },
    { name: "Talerz w kwiaty", url: "https://www.amart.pl/uploads/kolorowa-porcelana.jpg?1618826162454", price: "100" },
    { name: "Ozdobny zestaw", url: "https://koneserdesign.pl/25116-home_default/zestaw-porcelany-azurowej-brody-parc-sk.jpg", price: "500" },
    { name: "Filiżanka pozłacana", url: "https://www.as.cmielow.com.pl/4435/filizanka-prometeusz-herbata-relief-rozowa-porcelana.jpg", price: "270" },
    { name: "Filiżanka świąteczna", url: "https://czec.pl/userdata/public/gfx/9144/Swiateczna-filizanka-i-spodek-porcelana-Lubiana2.jpg", price: "100" },
    { name: "Zestaw obiadowy", url: "https://static.moliera2.com/data/portal_blog_post/photo/197/Banner%20Rosenthal%20Versace.jpg", price: "3,020" },
    { name: "Zestaw kubków", url: "https://www.toget.pl/blog/wp-content/uploads/2020/12/IMG_1463-800x445.jpg", price: "507" },
    { name: "Zestaw obiadowy Luksus", url: "https://lh3.googleusercontent.com/p/AF1QipMQ2G5CkkWLLpkk9MlMJfzkqTrswqEFgMXVeEM8=w1080-h608-p-no-v0", price: "4,700" },
  ]

  return (
    <div id="products" class="min-h-screen grid place-items-center py-8">
      <div class="flex flex gap-4 flex-wrap items-stretch justify-center max-w-[1400px]">
        {porcel.map((obj) => {
          return <Card {...obj} />
        })}
      </div>
    </div>
  );
});
