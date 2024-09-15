import React, { useState, useEffect } from 'react';
import './AnimateText.css';

export default function AnimateText({ lines }) {
	const [text, setText] = useState('');
	const [isDeleting, setIsDeleting] = useState(false);
	const [index, setIndex] = useState(0);
	const [loopNum, setLoopNum] = useState(0);

	const typingSpeed = 150;
	const backspaceSpeed = 100;
	const delay = 2000; // Delay before backspacing starts

	useEffect(() => {
		let typingTimeout;

		if (!isDeleting && text === lines[loopNum]) {
			// If typing is done, start backspacing after a delay
			typingTimeout = setTimeout(() => setIsDeleting(true), delay);
		} else if (isDeleting && text === '') {
			// Once backspacing is done, move to the next line
			setIsDeleting(false);
			setLoopNum((loopNum + 1) % lines.length);
			setIndex(0);
		} else {
			// Continue typing or backspacing
			typingTimeout = setTimeout(() => {
				setText(
					lines[loopNum].substring(0, index + (isDeleting ? -1 : 1))
				);
				setIndex(index + (isDeleting ? -1 : 1));
			}, isDeleting ? backspaceSpeed : typingSpeed);
		}

		return () => clearTimeout(typingTimeout);
	}, [text, isDeleting, index, loopNum, lines]);

	return (
		<div className="text-transition">
			<span >{text}</span>
			<span className="blinking-cursor">|</span>
		</div>
	);
}
