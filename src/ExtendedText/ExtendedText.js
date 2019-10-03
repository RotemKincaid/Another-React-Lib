import React, { useState, useEffect } from 'react'
import './ExtendedText.css'

/**
 * Extended text
 * Render a certain amount of text with read more link to display the rest
 * E.g.:
 * ```html
 * <ExtendedText characterAmount={10} text='my text' />
 * ```
 */
const ExtendedText = props => {
    const { characterAmount, text, styles } = props
    const [displayText, setDisplayText] = useState(text)
    const [isTruncated, setIsTruncated] = useState(true)

    useEffect(() => {
        truncateText()
    }, [text])

    const truncateText = () => {
        setDisplayText(text.substr(0, characterAmount) + '...')
        setIsTruncated(true)
    }

    const expandText = () => {
        setDisplayText(text)
        setIsTruncated(false)
    }

    const handleOnClick = () => {
        if (isTruncated) {
            expandText()
        } else {
            truncateText()
        }
    }

    return (
        <div className='text-container'>
            <h2>Extended Text Component</h2>
            <span
                style={styles}
            >
                {displayText}
            </span>
            <a className='text-button' onClick={handleOnClick}>{ isTruncated ? 'Read more' : 'Read less' }</a>
            <div className="space"/>
        </div>
    )
}

ExtendedText.defaultProps = {
    text: 'This is sample display text that can be expanded to view in its entirety by clicking read more.',
    characterAmount: 10,
    styles: {},
}

export default ExtendedText
