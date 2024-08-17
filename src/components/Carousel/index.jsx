import { Container } from './styles'

export function Carousel({ settings, children }) {
    return (
        <Container>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                {...settings}
            >
                {children}
            </Swiper>
        </Container>
    )
};