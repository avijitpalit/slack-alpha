'use client'

// import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import './page.css'
import { Roboto, Nunito, Inter } from 'next/font/google'
import Link from 'next/link';
import { useState } from 'react';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

const nunito = Nunito({
    weight: '600',
    subsets: ['latin'],
})

const inter = Inter({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
})

export default function Home() {
    const [styledText, setStyledText] = useState('')

    const onInputTextChange = (e: any) => {
        // console.log(e.target.value);
        //:alphabet-white-n:
        //:a:
        var text = e.target.value
        var text_2 = ''
        for (let i = 0; i < text.length; i++) {
            let alpha = text.charAt(i).toLowerCase()
            text_2 += alpha == ' ' ? '      ' : `:alphabet-white-${ alpha }:`
        }
        setStyledText(text_2)
        // console.log(text_2);
    }

    return (
        <main className={inter.className}>
            <Link href="/about" className="about-link">About Me</Link>
            <div className="text-center my-5">
                <h1 style={{ fontWeight: 400 }}>Generate Alphabet Emojis <span style={{ fontWeight: '600' }}>for Slack</span></h1>
                <form className="d-inline-block text-start py-3 px-5 mt-4 form-main" onSubmit={(e: any) => { e.preventDefault(); }}>
                    <div className="form-row d-flex align-items-center">
                        <div className="d-flex align-items-center tabs">
                            <a href="#" className="tab active">Style 1</a>
                            <a href="#" className="tab">Style 2</a>
                        </div>
                    </div>
                    <div className="form-row position-relative mt-4">
                        <label className="w-100" htmlFor="input-text">
                            <input type="text" name="text" id="input-text" className="form-control w-100 input-text" placeholder='Start writing here to see magic...' onChange={onInputTextChange} />
                        </label>
                    </div>
                    <div className="form-row mt-4">
                        <label htmlFor="" className="w-100">
                            <textarea className='form-control w-100' name="" rows={ 7 } placeholder='Slack emoji alphabets appears here' value={ styledText } readOnly />
                        </label>
                    </div>
                    <div className="form-row text-end mt-3">
                        <button className="button">Copy</button>
                    </div>
                </form>
            </div>
        </main>
    );
}
