import React from 'react';
import { Button, Modal } from 'reactstrap';
import ReactPlayer from 'react-player';
import './VideoModal.css';

interface Props {
  toggleModal: any;
  modal: boolean;
  vid: string;
}

export const VideoModal = (props: Props) => {
  return (
    <Modal
      className="d-flex justify-content-center"
      isOpen={props.modal}
      toggle={props.toggleModal}
    >
      <ReactPlayer
        url={`https://www.youtube-nocookie.com/embed/${props.vid}`}
        playing={true}
        controls={true}
        width="640px"
        height="480px"
      />
      <Button className="mt-4" color="primary" onClick={props.toggleModal}>
        Close
      </Button>
    </Modal>
  );
};