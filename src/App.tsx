import { useState } from 'react';
import styles from './App.module.scss';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <form className={styles.form}>
                <div className={styles.input}>
                    <label className={styles.name} id={'name'} name={'name'}>
                        name
                    </label>
                    <input id={'name'} name={'name'} />
                </div>
                <div className={styles.input}>
                    <label>Email</label>
                    <input id={'email'} name={'email'} />
                </div>
                <div className={styles.input}>
                    <label>Massage </label>
                    <input id={'Massage '} name={'Massage '} />
                </div>
                <button className={styles.button}>Submit</button>
            </form>
        </div>
    );
}

export default App;
