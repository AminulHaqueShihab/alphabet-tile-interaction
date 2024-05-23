import { Button, ButtonProps, Flex } from '@chakra-ui/react';
import React, { FC } from 'react';

type KeyCapButtonProps = ButtonProps & {
	label: string;
};

const KeyCapButton: FC<KeyCapButtonProps> = ({ label, ...props }) => {
	return (
		<Flex
			position='relative'
			display='inline-block'
			_after={{
				content: '""',
				h: '100%',
				w: '100%',
				p: '4px',
				position: 'absolute',
				bottom: '-15px',
				left: '-4px',
				zIndex: '-1',
				bg: 'footer',
				borderRadius: '5px',
			}}
		>
			<Button
				color='white'
				fontSize='1.5rem'
				background='#329450'
				// display='block'
				position='relative'
				// p='15px 40px'
				width='50px'
				height='40px'
				textShadow='0px 1px 0px #000'
				dropShadow={{ color: '#000', offX: '0px', offY: '1px' }}
				boxShadow='inset 0 1px 0 #c4ffc8, 0 10px 0 #076a00'
				borderRadius='5px'
				_active={{
					top: '10px',
					bg: '#24e741',
					boxShadow: 'inset 0 1px 0 #c4ffc8, inset 0 -3px 0 #076a00',
					textShadow: '0px 0.5px 0px #000',
				}}
				_focusVisible={{
					border: 'none',
				}}
				_hover={{
					bg: '#329450',
				}}
				{...props}
			>
				{label}
			</Button>
		</Flex>
	);
};

export default KeyCapButton;
