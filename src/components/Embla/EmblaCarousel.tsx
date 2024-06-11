'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import brandsData from '../Brands/brandsData'
import { Image } from '@chakra-ui/react'
import { Brand } from '@/types/brand'

type PropType = {
  options?: EmblaOptionsType
  data?: Brand[]
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options, data } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {data.map((item, index) => (
            <div className="embla__slide" key={index} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
              {/* <div className="embla__slide__number">{index + 1}</div> */}
              <Image maxWidth={'50%'} src={item.image}/>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div> */}
      </div>
    </section>
  )
}

export default EmblaCarousel
