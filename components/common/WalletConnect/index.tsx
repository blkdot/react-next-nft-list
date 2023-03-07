import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  useDisclosure
} from '@chakra-ui/react'
import {
  useAccount,
  useDisconnect
} from 'wagmi'
import Connector from './Connector';
import { shortAddr } from 'helpers';

const WalletConnect = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  return (
    <>
      {!isConnected &&
        <Button
          colorScheme='blue'
          variant='outline'
          onClick={onOpen}
        >
          Connect a Wallet
        </Button>
      }
      {isConnected &&
        <Menu>
          <MenuButton as={Button} colorScheme='blue'>
            {shortAddr(address)}
          </MenuButton>
          <MenuList>
            <MenuGroup>
              <MenuItem onClick={() => disconnect()}>Disconnect</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      }

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Wallet</ModalHeader>
          <ModalCloseButton />
          <ModalBody py={10} px={8}>
            <Connector onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default WalletConnect;
