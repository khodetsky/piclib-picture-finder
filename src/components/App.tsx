import React, { useState, useEffect } from 'react';
import { FormikHelpers } from "formik";

import { IValues, IImage } from "../types";

import { GlobalStyle } from './GlobalStyles';
import { Searchbar } from './Searchbar/Searchbar';
import { getUser } from './Api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

const App: React.FC = () => {
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [images, setImages] = useState<IImage[]>([]);
  const [currentImage, setCurrentImage] = useState<Partial<IImage>>({});
  const [status, setStatus] = useState<"initial" | "loading" | "done">("initial");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (searchValue === "") {
      return;
    }

    getUser(searchValue, page).then( (r) => {
      if (typeof r !== "undefined") {
        setImages(prevImages => [...prevImages, ...r]);
        setStatus("done")
      }
    });
  }, [page, searchValue]);

  const toggleModal = (): void => {
    if (showModal) {
      document.body.style.overflow = 'visible';
    } else {
      document.body.style.overflow = 'hidden';
    }
    
    setShowModal(prevState => (!prevState))
  }

  const findCurrentImage = (e: React.MouseEvent<HTMLElement>): void => {
    const selectImage = images.find(image  => image?.webformatURL === (e.target as HTMLImageElement).src )
    setCurrentImage(selectImage as IImage)
    toggleModal();
  }

  const loadMore = () => {
    setPage(prevState => (prevState + 1));
    setTimeout(() => {
      window.scrollBy({
        top: 520,
        behavior: "smooth",
      });
    }, 700)
  }
  
  const onFormSubmit = ({ searchValue }: IValues, { resetForm }: FormikHelpers<IValues>): void => {
    setSearchValue(searchValue);
    setImages([]);
    setPage(1);
    setStatus("loading");
    resetForm();
  }

  return (
    <>
      <Searchbar onSubmit={onFormSubmit} />

      {status === "done" && (
        <>
          <ImageGallery images={images} onModalOpen={findCurrentImage} />
          <LoadMoreBtn onLoadMore={loadMore} />
        </>
      )}

      {status === "loading" && (<Loader />)}

      {showModal && (
        <Modal onClose={toggleModal}><img src={currentImage.largeImageURL} alt={currentImage.tags}
          style={{ width: "100%", height: "100%", objectFit: "cover" }} /></Modal>
      )}
      
      <GlobalStyle/>
    </>
  );
}

export default App;
