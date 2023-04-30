import React, { useState, useEffect } from 'react';
import { FormikHelpers } from "formik";

import { IValues, IImage } from "../types";

import { GlobalStyle } from './GlobalStyles';
import { Searchbar } from './Searchbar/Searchbar';
import { getImages } from './Api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Gallery } from "./Gallery/Gallery";

const App: React.FC = () => {
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [images, setImages] = useState<IImage[]>([]);
  const [currentImage, setCurrentImage] = useState<Partial<IImage>>({});
  const [status, setStatus] = useState<"initial" | "loading" | "done">("initial");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (searchValue === "") {
      return;
    }

    getImages(searchValue, page).then( (r) => {
      if (typeof r !== "undefined") {
        setImages(prevImages => [...prevImages, ...r.hits]);
        setTotalHits(r.totalHits)
        setStatus("done")
      }
    });
  }, [page, searchValue]);

  useEffect(() => {
    if (status === "done" && window.pageYOffset === 0) {
      window.scrollBy({
        top: 500,
        behavior: "smooth",
      });
    }
  }, [status])

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

  const loadMore = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPage(prevState => (prevState + 1));
    (e.target as HTMLButtonElement).disabled = true;

    setTimeout(() => {
      window.scrollBy({
        top: 520,
        behavior: "smooth",
      });

      (e.target as HTMLButtonElement).disabled = false;
    }, 700)
  }
  
  const onFormSubmit = ({ searchValue }: IValues, { resetForm }: FormikHelpers<IValues>): void => {
    setSearchValue(searchValue);
    setImages([]);
    setPage(1);
    setStatus("loading");
    window.scroll(0, 500);
    resetForm();
  }

  return (
    <>
      <Searchbar onSubmit={onFormSubmit} />
      <Gallery />

      {status === "done" && (
        <>
          <ImageGallery images={images} onModalOpen={findCurrentImage} />
          {images.length !== totalHits && (
            <LoadMoreBtn onLoadMore={loadMore} />
          )}
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
