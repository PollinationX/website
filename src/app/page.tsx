import Image from 'next/image'
import styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;
library.add(fas, fab);

export default function Home() {
  return (
      <>
    <main className={styles.main}>
      <div className={styles.description}>

        <p className="text-center">
        <a href="https://github.com/pollinationx/"
           rel="noopener nofollow noreferrer"
           target="_blank"
           className="inline-flex items-center px-4 py-2 mr-3 text-xs font-medium
           border rounded-lg focus:outline-none
           focus:z-10 focus:ring-2 focus:ring-gray-500 bg-gray-800 text-gray-400
           border-gray-600 hover:text-white hover:bg-gray-700">
          <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="w-4 h-4 mr-2"
               role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
            <path fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
          </svg>
          GitHub
        </a>
        </p>

        <div className="text-center items-center">
        <a href="https://testnet.pollinationx.io/"
           rel="noopener nofollow noreferrer"
           target="_blank"
           className="inline-flex items-center px-4 py-2 mr-3 text-xs font-medium border rounded-lg focus:outline-none focus:z-10 focus:ring-2 focus:ring-gray-500 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700">
          Testnet
        </a>
        </div>
        {/*<div className="text-center items-center">*/}
        {/*  <a href="https://twitter.com/pollinationx_io"*/}
        {/*     rel="noopener nofollow noreferrer"*/}
        {/*     target="_blank"*/}
        {/*     className="inline-flex items-center px-4 py-2 mr-3 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">*/}
        {/*    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="w-4 h-4 mr-2"*/}
        {/*         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">*/}
        {/*      <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>*/}
        {/*    Twitter*/}
        {/*  </a>*/}
        {/*</div>*/}
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/logo_black_bg.svg"
          alt="PollinationX Logo"
          width={350}
          height={350}
          priority
        />
      </div>
      <div className={styles.grid}>
        <a
            href="https://testnet.drive.pollinationx.io/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
        >
          <h2>
            PX Drive, Decentralized drive
          </h2>
          <p>
            Decentralized service that enables users to store and access files online in a self-custodial and permissionless way. The service syncs stored documents, photos and more across all the user's devices, that support Web3 wallets.
          </p>
        </a>
        <a
            href="https://testnet.w3xshare.com/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
        >
          <h2>
            W3XShare, decentralized file transfer
          </h2>
          <p>
            Web3 data file transfer platform. To achieve full immutability and custodianship every data file transfer is represented as an L1 or L2 transaction.
          </p>
        </a>
        <a
            href="https://wiki.pollinationx.io"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
        >
          <h2>
            Wiki / developer docs
          </h2>
          <p>
            Integrating PollinationX into your project is simple with our comprehensive developer documentation, which includes step-by-step instructions and APIs for easy access to decentralized storage solutions.
          </p>
        </a>
      </div>
    </main>

  <footer className="bg-black dark:bg-black">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a
              href="/" className="hover:underline">PollinationX</a>. All Rights Reserved.
          </span>
        <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
          <a target="_blank" href="https://twitter.com/PollinationX_io" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                 viewBox="0 0 20 17">
              <path fillRule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clipRule="evenodd"/>
            </svg>
            <span className="sr-only">Twitter</span>
          </a>
          <a target="_blank" href="https://github.com/pollinationx/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                 viewBox="0 0 20 20">
              <path fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"/>
            </svg>
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</>
)
}
