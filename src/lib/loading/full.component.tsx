import React from 'react';
import styles from './loading.module.scss';

interface FullPageLoadingProps {
    text?: string;
}

const FullPageLoading: React.FC<FullPageLoadingProps> = ({ text = 'Loading...' }) => {
    return (
        <div className={styles.loadingBackground}>
            <div className={styles.loadingWrapper}>
                <div className={styles.spinner}></div>
                {text && <p className={styles.loadingText}>{text}</p>}
            </div>
        </div>
    );
};

export default FullPageLoading;