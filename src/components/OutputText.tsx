import { Text, TextProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

type OutputTextProps =TextProps &{
	children?: ReactNode;
};

const OutputText: FC<OutputTextProps> = ({ children, ...props }) => {
	return (
		<Text px={4} maxW='350px' flexWrap='wrap' fontSize='xl' fontWeight='bold' {...props}>
			{children}
		</Text>
	);
};

export default OutputText;
