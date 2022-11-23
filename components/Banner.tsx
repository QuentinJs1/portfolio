import styles from '@styles/Banner.module.css'
import Image from 'next/image'

export default function Banner() {
    return (
        <div className='my-6'>
            <div className='line-x'/>
            <div className="flex w-screen py-2 px-12 text-center justify-center items-center">
                <p className={` ${styles.movingText} text-lg mx-4`}>Le site est encore en dev !&nbsp;</p>
                <p className={` ${styles.movingText} text-lg mx-4`}>Le site est encore en dev !&nbsp;</p>
                <p className={` ${styles.movingText} text-lg mx-4`}>Le site est encore en dev !&nbsp;</p>
                <p className={` ${styles.movingText} text-lg mx-4`}>Le site est encore en dev !&nbsp;</p>
                <p className={` ${styles.movingText} text-lg mx-4`}>Le site est encore en dev !&nbsp;</p>
                <p className={` ${styles.movingText} text-lg mx-4`}>Le site est encore en dev !&nbsp;</p>
                <p className={` ${styles.movingText} text-lg mx-4`}>Le site est encore en dev !&nbsp;</p>
                <p className={` ${styles.movingText} text-lg mx-4`}>Le site est encore en dev !&nbsp;</p>
                <p className={` ${styles.movingText} text-lg mx-4`}>Le site est encore en dev !&nbsp;</p>
                <p className={` ${styles.movingText} text-lg mx-4`}>Le site est encore en dev !&nbsp;</p>
            </div>
            <div className='line-x'/>
        </div>
    )
}