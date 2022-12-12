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
                <div>I&apos;M UP FOR HIRE</div>
                <Image src={cube} alt="Wireframe cube"></Image>
                <div>I&apos;M UP FOR HIRE</div>
                <Image src={cone} alt="Wireframe cone"></Image>
                <div>I&apos;M UP FOR HIRE</div>
                <Image src={sphere} alt="Wireframe sphere"></Image>
                <div>I&apos;M UP FOR HIRE</div>
                <Image src={plane} alt="Wireframe plane"></Image>
                <div>I&apos;M UP FOR HIRE</div>
                <Image src={cube} alt="Wireframe cube"></Image>
                <div>I&apos;M UP FOR HIRE</div>
                <Image src={cone} alt="Wireframe cone"></Image>
                <div>I&apos;M UP FOR HIRE</div>
                <Image src={sphere} alt="Wireframe sphere"></Image>
                <div>I&apos;M UP FOR HIRE</div>
                <Image src={plane} alt="Wireframe plane"></Image>
                <div>I&apos;M UP FOR HIRE</div>
                <Image src={cube} alt="Wireframe cube"></Image>
                <div>I&apos;M UP FOR HIRE</div>
                <Image src={cone} alt="Wireframe cone"></Image>
                <div>I&apos;M UP FOR HIRE</div>
                <Image src={sphere} alt="Wireframe sphere"></Image>
                <div>I&apos;M UP FOR HIRE</div>
                <Image src={plane} alt="Wireframe plane"></Image>
            </div>
            <div className='line-x' />
        </div>
    )
}