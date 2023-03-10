import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

interface ICardType {
  url: string,
  name: string,
  price: string
}
export default component$((props: ICardType) => {
  const { url, name, price } = props

  return (
    <Link href="/porcelan">
      <div class="flex flex-col gap-2 cursor-pointer border border-solid border-transparent hover:border-slate-900"
        onClick$={() => {
          localStorage.setItem('porc', JSON.stringify({ ...props }))
        }}>
        <img src={url} alt={name} class="sm:h-[260px] object-cover" />
        <div class="flex flex-col gap-2 p-4 shadow">
          <h2 class="text-2xl">{name}</h2>
          <p>${price}</p>
        </div>
      </div>
    </Link>
  );
});
