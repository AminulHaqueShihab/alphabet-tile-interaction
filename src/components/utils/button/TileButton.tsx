import { Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { FC } from 'react';

type TileButtonProps = {
	letter: string;
	handleClick: (letter: string) => void;
};

const TileButton: FC<TileButtonProps> = ({ letter, handleClick }) => {
	return (
		<Button
			as={motion.button}
			whileTap={{ scale: 0.9 }}
			width='40px'
			height='40px'
			fontSize='lg'
			fontWeight='bold'
			borderRadius='md'
			colorScheme='teal'
			onClick={() => handleClick(letter)}
		>
			{letter}
		</Button>
	);
};

export default TileButton;
