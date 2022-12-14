import React from 'react'


export default function AlertBadge() {
    const gitHubIcon =
        <span id='AlertBadge' className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
            <svg className='animate-pulse' height="20" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="20" data-view-component="true">
                <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
        </span>;

    return (
        <div className="bg-indigo-900  text-center py-4 lg:px-4 h-14 flex items-center ">
            <div className="mx-auto p-2 bg-indigo-800 items-center text-indigo-100 leading-none sm:rounded-full flex lg:inline-flex" role="alert">
                <a href='https://github.com/abdelrahman-essawy/AAST-E-Learning-Platform'>
                    {gitHubIcon}
                </a>
                <span className="font-semibold mr-2 text-left flex-auto sticky leading-tight">This platform is currently under development by
                    <span className=''>
                        <a className='font-bold' href='https://github.com/abdelrahman-essawy/AAST-E-Learning-Platform'> Abdelrahman Essawy</a>
                    </span>
                </span>

                <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
            </div>
        </div>

    )
}
