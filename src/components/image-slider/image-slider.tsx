import { component$, useSignal, useStylesScoped$, $, Component } from '@builder.io/qwik';
import sliderDotStyle from "./slider_dots.css?inline";

interface ImageSliderProps {
  slides: Component<any>[];
  initialSlide?: number;
  width?: string;
  height?: string;
}

export const ImageSlider = component$(({ slides, initialSlide = 0, width = '100%', height = '350px' }: ImageSliderProps) => {
  useStylesScoped$(sliderDotStyle);
  const index = useSignal(initialSlide);

  const totalSlides = slides.length;

  const goToSlide = $((event: SubmitEvent, newIndex: number) => {
    event.preventDefault();
    index.value = (newIndex + totalSlides) % totalSlides; // safe wrap around
  });

  const SlideComponent = slides[index.value]
  return (
    <div
      style={{ width, height }}
    >
      <div
        style={{border: '1px solid #AAA', padding:'10px', width:'95%', height:'350px'}}
      >
        <SlideComponent />
      </div>

      {/* Previous Slide Button */}
      <form
        method="get"
        preventdefault:submit
        onSubmit$={e => goToSlide(e, index.value - 1)}
        style={{ display: 'inline-block' }}
      >
        <input type="hidden" name="slide" value={(index.value - 1 + totalSlides) % totalSlides} />
        <button
          type="submit"
          aria-label="Previous Slide"
        >
          ◀
        </button>
      </form>

      {/* Next Slide Button */}
      <form
        method="get"
        preventdefault:submit
        onSubmit$={e => goToSlide(e, index.value + 1)}
        style={{ display: 'inline-block', marginLeft: "5px" }}
      >
        <input type="hidden" name="slide" value={(index.value + 1) % totalSlides} />
        <button
          type="submit"
          aria-label="Next Slide"
        >
          ▶
        </button>
      </form>

      {/* Slide Indicators */}
      <div style={{ display: 'inline-block', marginLeft: "20px"}}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', }}>
          {slides.map((_, i) => (
            <div
              key={i}
              class={index.value === i ? 'dot active' : 'dot'}
            />
          ))}
        </div>
      </div>
    </div>
  );
});
