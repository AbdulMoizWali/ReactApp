import { Container } from "react-bootstrap";
import { NavScrollExample } from './ReactComponent/navbar';


let CardData = [
    {
        title: 'HP Elite x2',
        description: 'HP Elite x2 1012 G2 PC - 7th Gen Intel Core i5 7200u Processor 08GB 256GB SSD 12.3" QHD UVWA eDP 1824p 450nits IPS Touch Display B&O Play Backlit KB FP Reader W10 (With Keyboard, Open Box) ',
        price: 76000,
        ImgURL: 'https://www.paklap.pk/pub/media/catalog/product/cache/c938ed01212b1a8ab031a77ffa2280a2/h/p/hp-elitex2-1012-g2-7thgen-ci5-12.3inch-touch-tablet-pc-laptop-price-in-pakistan.jpg'
    },
    {
        title: 'HP Elite x2 1012 G2',
        description: 'HP Elite x2 1012 G2 PC - 7th Gen Intel Core i5 vPro 7300u Processor 16GB 256GB SSD 12.3" QHD UVWA eDP 1824p 450nits IPS Touch Display B&O Play Backlit KB (With Keyboard, Open Box) ',
        price: 83000,
        ImgURL: 'https://www.paklap.pk/pub/media/catalog/product/cache/c938ed01212b1a8ab031a77ffa2280a2/h/p/hp-elitex2-1012-g2-7300u-7thgen-ci5-12.3inch-touch-tablet-pc-laptop-price-in-pakistan.jpg'
    },
    {
        title: 'HP 15s FQ5004nia',
        description: 'HP 15s FQ5004nia - Alder Lake - 12th Gen Core i3 04GB to 32GB 256GB to 02-TB SSD 15.6" HD 720p MicroEdge 250nits Display TPM (Silver)',
        price: 105900,
        ImgURL: 'https://www.paklap.pk/pub/media/catalog/product/cache/c938ed01212b1a8ab031a77ffa2280a2/h/p/hp_elite_x2_1013_g3_price_paklap.jpg'
    },
    {
        title: 'HP EliteBook Folio 1040 G5',
        description: 'HP EliteBook Folio 1040 G5 x360 - 8th Gen Ci5 QuadCore 08GB 256GB SSD 14" Full HD 1080p IPS Convertible Touchscreen B&O Play Backlit KB FP Reader Thunderbolt (Silver, Open Box)',
        price: 10690,
        ImgURL: 'https://www.paklap.pk/pub/media/catalog/product/cache/c938ed01212b1a8ab031a77ffa2280a2/h/p/hp-fq5000nia-12thgen-ci3-black-laptop-price-in-pakistan.jpg'
    },
    {
        title: 'HP 15s FQ5000nia',
        description: 'HP 15s FQ5000nia - Alder Lake - 12th Gen Core i3 04GB to 32GB 256GB to 02-TB SSD 15.6" HD 720p MicroEdge 250nits Display TPM (Black)',
        price: 10590,
        ImgURL: 'https://www.paklap.pk/pub/media/catalog/product/cache/c938ed01212b1a8ab031a77ffa2280a2/c/0/c06150681_2_2.png'
    },
    {
        title: 'HP EliteBook Folio x360',
        description: 'HP EliteBook Folio x360 1030 G3 - 8th Gen Ci5 QuadCore 16GB 256GB TO 1-TB SSD 13.3 Full HD 1080p IPS Touchscreen Convertible Backlit KB FP Reader Thunderbolt W10 Pro (Open Box, Customize) HP EliteBook Folio x360 1030 G3 - 8th Gen Ci5 QuadCore 16GB 256GB TO 1-TB SSD 13.3 Full HD 1080p IPS Touchscreen Convertible Backlit KB FP Reader Thunderbolt W10 Pro (Open Box, Customize)',
        price: 10800,
        ImgURL: 'https://www.paklap.pk/pub/media/catalog/product/cache/c938ed01212b1a8ab031a77ffa2280a2/h/p/hp_elitebook_folio_x360_1030_g3_price_paklap.jpg'
    }
]


export function ReactLab11() {
    return (
        <div>
            <NavScrollExample />
            <Container>
                <div className="row">
                    {
                        CardData.map((val, i) => {
                            return <div className="col-md-4 mt-2">
                                <div className="p-2 rounded shadow">
                                    <div>
                                        <img src={val.ImgURL} width='100%' />
                                    </div>
                                    <h1>{val.title}</h1>
                                    <h2>Rs. {val.price}/-</h2>
                                    <p className="p-2">{val.description}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </Container>
        </div>
    )
}