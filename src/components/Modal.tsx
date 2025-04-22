import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  Button,
} from '@headlessui/react';
import { Fragment, JSX } from 'react';
import { useAppStore } from '../stores/useAppStore';
import { Recipe } from '../types';

export default function Modal() {
  const modal = useAppStore((state) => state.modal);
  const closeModal = useAppStore((state) => state.closeModal);
  const selectedRecipe = useAppStore((state) => state.selectedRecipe);

  const renderIngredients = () => {
    const ingredients: JSX.Element[] = [];
    for (let i = 1; i <= 6; i++) {
      const ingredient = selectedRecipe[`strIngredient${i}` as keyof Recipe];
      const measure = selectedRecipe[`strMeasure${i}` as keyof Recipe];

      if (ingredient && measure) {
        ingredients.push(
          <li key={i}>
            {ingredient} - {measure}
          </li>
        );
      }
    }
    return ingredients;
  };
  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog
          open={modal}
          as='div'
          className='relative z-10 focus:outline-none'
          onClose={() => closeModal()}
        >
          <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4'>
              <DialogPanel
                transition
                className='w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 flex  flex-col items-center justify-center'
              >
                <DialogTitle as='h3' className=' text-2xl font-bold'>
                  {selectedRecipe.strDrink}
                </DialogTitle>
                <img
                  src={selectedRecipe.strDrinkThumb}
                  alt={`Imagen de ${selectedRecipe.strDrink}`}
                  style={{ height: '300px' }}
                />
                <h1 className=' text-2xl font-bold'>
                  Ingredientes y cantidades
                </h1>
                <p className='mt-2 text-sm/6 text-black'>
                  {renderIngredients()}
                </p>
                <h1 className=' text-2xl font-bold'>Instrucciones</h1>
                <p className='mt-2 text-sm/6 text-black'>
                  {selectedRecipe.strInstructions}
                </p>
                <div className='mt-4'>
                  <Button
                    className='inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700'
                    onClick={closeModal}
                  >
                    Close
                  </Button>
                  <Button
                    className='inline-flex items-center gap-2 rounded-md bg-orange-400 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-orange-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700'
                    onClick={closeModal}
                  >
                    Agregar a favoritos
                  </Button>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
