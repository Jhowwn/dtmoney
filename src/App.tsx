import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";


Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTrasactionModal () {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTrasactionModal () {
        setIsNewTransactionModalOpen(false);
    } 
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTrasactionModal}/>

      <Dashboard />

      <Modal isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTrasactionModal}>
        <h2>Cadastrar Transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}