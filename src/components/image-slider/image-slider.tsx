import { component$, useSignal, $, JSX } from '@builder.io/qwik';

interface ImageSliderProps {
  slides: JSX.Element[];
  width?: string;
  height?: string;
}

export const ImageSlider = component$(({ slides }: ImageSliderProps) => {
  const index = useSignal(0);
  const total = slides.length;

  const prev = $(() => {
    index.value = (index.value - 1 + total) % total;
  });

  const next = $(() => {
    index.value = (index.value + 1) % total;
  });

    //<div style={{ width, height }} class="relative overflow-hidden rounded-2xl shadow-md flex items-center justify-center">
  return (
    <div class="relative w-full max-w-3xl h-[300px] overflow-hidden rounded-2xl shadow-md flex items-center justify-center">
      <div style={{border: '1px solid #AAA', padding:'10px', width:'95%', height:'350px'}} class="w-full h-full">
        {slides[index.value]()}
      </div>
      <button
        onClick$={prev}
        class="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
      >
        ◀
      </button>
      <button
        onClick$={next}
        class="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
      >
        ▶
      </button>
      <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {slides.map((_, i) => (
          <div
            key={i}
            class={{
              'w-2 h-2 rounded-full': true,
              'bg-white/80': index.value !== i,
              'bg-white': index.value === i,
            }}
          />
        ))}
      </div>
    </div>
  );
});
