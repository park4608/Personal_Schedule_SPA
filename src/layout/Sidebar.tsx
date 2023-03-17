import React, { ReactNode, ReactText } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Box, CloseButton, Flex, Icon, useColorModeValue, Drawer, DrawerContent, Text, useDisclosure, BoxProps, FlexProps } from '@chakra-ui/react';
import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings, FiMenu } from 'react-icons/fi';
import { IconType } from 'react-icons';

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome },
  { name: 'Schedule', icon: FiTrendingUp },
  // { name: 'Monthly', icon: FiCompass },
  { name: 'StickerMemo', icon: FiStar },
  { name: 'Form', icon: FiCompass },
  { name: 'clock', icon: FiCompass },
];

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH='100vh' minW='250px' bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={() => onClose} />
      <Drawer autoFocus={false} isOpen={isOpen} placement='left' onClose={onClose} returnFocusOnClose={false} onOverlayClick={onClose} size='full'>
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* <Box ml={{ base: 0, md: 60 }} p='4'>
        {children}
      </Box> */}
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box bg={useColorModeValue('white', 'gray.900')} borderRight='1px' borderRightColor={useColorModeValue('gray.200', 'gray.700')} w='250px' pos='fixed' h='full' {...rest}>
      <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
        <Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'>
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          <Link to={'/' + link.name}>{link.name}</Link>
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Flex
      align='center'
      p='4'
      mx='4'
      borderRadius='lg'
      role='group'
      cursor='pointer'
      _hover={{
        bg: 'cyan.400',
        color: 'white',
      }}
      {...rest}>
      {icon && (
        <Icon
          mr='4'
          fontSize='16'
          _groupHover={{
            color: 'white',
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  );
};
