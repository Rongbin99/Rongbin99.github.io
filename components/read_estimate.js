import React, { useState, useEffect } from 'react';
import readingDuration from "reading-duration";

/**
 * Returns the estimated reading time.
 * 
 *  @param {string} context - Link to webpage to be estimated.
 *  @param {string} emoji - Emoji to be displayed (defaults to hourglass).
 *  @param {number} wpm - Words per minute (defaults to 160).
 *  @return {string} [emoji] X minute read
 *
 * Usage:
 * - import Readingtime from "../components/read_estimate.js";
 * - `<Readingtime context="<REQUIRED>" emoji="<OPTIONAL>" wpm="<OPTIONAL>"/>`
 */
const readingtime = ({context, emoji, wpm = 160}) => {
    const [timeEstimate, setTimeEstimate] = useState('');

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const content = await fetch(context);
                const content_raw = await content.text();
                const duration = readingDuration(content_raw, {
                    wordsPerMinute: wpm,
                    emoji: emoji
                });
                setTimeEstimate(duration);
            } catch (error) {
                console.error('Error fetching content: ', error);
            }
        };
        fetchContent();
    }, [context, emoji, wpm]);

    return (
        <p className="-mb-2 -mt-6">
            {timeEstimate}
        </p>
    );
};

export default readingtime;

/**
true: '⌛ '
false: no emoji
hourglass_done: '⌛ '
hourglass_not_done: '⏳ '
stopwatch: '⏱ '
clock: '🕒 '
watch: '⌚ '
timer: '⏲ '
alarm: '⏰ '
books: '📚 '
open_book: '📖 '
closed_book: '📕 '
blue_book: '📘 '
green_book: '📗 '
orange_book: '📙 '
notebook: '📓 '
notebook_alt: '📔 '
 */
