'use client';
import KeyCapButton from '@/components/utils/button/KeyCapButton';
import Column from '@/components/utils/column/Column';
import { replaceConsecutiveLetters } from '@/functions/replaceConsecutiveLetters';
import { letters } from '@/lib/data';
import { Flex, Grid, Text } from '@chakra-ui/react';
import { useState } from 'react';

const AlphabetTiles = () => {
	const [outputString, setOutputString] = useState<string>('');

	const handleClick = (letter: string) => {
		let newOutputString = outputString + letter;
		newOutputString = replaceConsecutiveLetters(newOutputString);
		setOutputString(newOutputString);
	};

	return (
		<Column gap={8} align='center' justify='center' h='100vh'>
			<Flex
				align='center'
				justify='center'
				minH='50px'
				w='full'
				maxW={'350px'}
				overflow={'hidden'}
				borderRadius={'8px'}
				border='1px solid'
			>
				<Text
					id='outputString'
					px={4}
					maxW='350px'
					flexWrap='wrap'
					fontSize='xl'
					fontWeight='bold'
				>
					{outputString}
				</Text>
			</Flex>
			<Grid
				templateColumns={{
					base: 'repeat(6, 1fr)',
					md: 'repeat(7, 1fr)',
					lg: 'repeat(9, 1fr)',
				}}
				gap={4}
			>
				{letters.map((letter, index) => (
					<KeyCapButton
						key={index}
						label={letter}
						onClick={() => handleClick(letter)}
					/>
				))}
			</Grid>
			<KeyCapButton
				label='Clear'
				w={'auto'}
				onClick={() => setOutputString('')}
			/>
		</Column>
	);
};

export default AlphabetTiles;
