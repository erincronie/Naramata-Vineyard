import '../BackToTopButton/BackToTopButton.scss';

const BackToTopButton = () => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    };
  
    return (
        <div className='button'>
            <button className='button__main' onClick={scrollToTop}>
            Back to top
            </button>
      </div>
    );
  };
  
  export default BackToTopButton;