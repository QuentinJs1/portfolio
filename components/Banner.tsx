import styles from '@styles/Banner.module.css'
import Image from 'next/image'
import cube from '@public/images/wireframes/cube.png'
import cone from '@public/images/wireframes/cone.png'
import sphere from '@public/images/wireframes/sphere.png'
import plane from '@public/images/wireframes/plane.png'

export default function Banner() {
    return (
        <div className='my-6 bg-dark z-1 relative'>
            <div className='line-x' />
            <div className={` ${styles.banner} flex items-center`}>
                <div>I'M UP FOR HIRE</div>
                <Image src={cube} alt="Wireframe cube"></Image>
                <div>I'M UP FOR HIRE</div>
                <Image src={cone} alt="Wireframe cube"></Image>
                <div>I'M UP FOR HIRE</div>
                <Image src={sphere} alt="Wireframe cube"></Image>
                <div>I'M UP FOR HIRE</div>
                <Image src={plane} alt="Wireframe cube"></Image>
                <div>I'M UP FOR HIRE</div>
                <Image src={cube} alt="Wireframe cube"></Image>
                <div>I'M UP FOR HIRE</div>
                <Image src={cone} alt="Wireframe cube"></Image>
                <div>I'M UP FOR HIRE</div>
                <Image src={sphere} alt="Wireframe cube"></Image>
                <div>I'M UP FOR HIRE</div>
                <Image src={plane} alt="Wireframe cube"></Image>
                <div>I'M UP FOR HIRE</div>
                <Image src={cube} alt="Wireframe cube"></Image>
                <div>I'M UP FOR HIRE</div>
                <Image src={cone} alt="Wireframe cube"></Image>
                <div>I'M UP FOR HIRE</div>
                <Image src={sphere} alt="Wireframe cube"></Image>
                <div>I'M UP FOR HIRE</div>
                <Image src={plane} alt="Wireframe cube"></Image>
            </div>
            <div className='line-x' />
        </div>
    )
}