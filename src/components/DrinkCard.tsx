import { useAppStore } from '../stores/useAppStore';
import { Drink } from '../types';

type DrinkCardProps = {
  drink: Drink;
};

export default function DrinkCard({ drink }: DrinkCardProps) {
  const selectRecipe = useAppStore((select) => select.selectRecipe);
  return (
    <div className='border shadow-lg max-w-[350px]'>
      <div className=' overflow-hidden'>
        <img
          src={drink.strDrinkThumb}
          alt={`Imagen de ${drink.strDrink}`}
          className='hover:scale-125 transition-transform hover:rotate-2'
        />
      </div>
      <div className='p-5'>
        <h2 className=' text-2xl truncate font-black'>{drink.strDrink} </h2>
        <button
          type='button'
          className=' cursor-pointer bg-orange-400 hover:bg-orange-500 text-white font-bold text-lg mt-5 w-full p-3'
          onClick={() => selectRecipe(drink.idDrink)}
        >
          Ver Receta
        </button>
      </div>
    </div>
  );
}
