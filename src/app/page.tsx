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
    const [normalText, setNormalText] = useState('')
    const [style, setStyle] = useState(1)

    const onInputTextChange = (e: any) => {
        //:alphabet-white-n:
        //:a:
        setNormalText(e.target.value)
        
        var text = e.target.value
        var text_2 = ''
        for (let i = 0; i < text.length; i++) {
            let alpha = text.charAt(i).toLowerCase()
            if(style == 1) text_2 += alpha == ' ' ? '      ' : `:alphabet-white-${ alpha }:`
            else text_2 += alpha == ' ' ? '      ' : `:${ alpha }:`
        }
        setStyledText(text_2)
    }

    const onStyleChane = (e: any) => {
        setStyle(e.target.checked ? 2 : 1)
        // console.log(style);
        convertText()
    }

    const onCopyText = () => {
        navigator.clipboard.writeText(styledText)
    }

    const convertText = () => {
        var text_2 = ''
        // console.log(normalText);
        
        for (let i = 0; i < normalText.length; i++) {
            let alpha = normalText.charAt(i).toLowerCase()
            if(style == 2) text_2 += alpha == ' ' ? '      ' : `:alphabet-white-${ alpha }:`
            else text_2 += alpha == ' ' ? '      ' : `:${ alpha }:`
        }
        console.log(style);
        // console.log(text_2);
        
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
                        <input onChange={ onStyleChane } className='d-none' type="checkbox" name="style" id="style" />
                        <label htmlFor='style' className="d-flex align-items-center tabs">
                            <span className="tab active">Style 1</span>
                            <span className="tab">Style 2</span>
                        </label>
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
                    <div className="form-row text-end mt-3 d-flex gap-1 justify-content-end">
                        <button onClick={() => {
                            console.log(style);
                            
                        }} className="button">Reset</button>
                        <button onClick={onCopyText} className="button">Copy</button>
                    </div>
                </form>
            </div>
        </main>
    );
}
