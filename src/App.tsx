import { useState } from 'react';
import styles from './App.module.scss';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <form className={styles.form}>
                <div className={styles.input_div}>
                    <label className={styles.name} id={'name'} name={'name'}>
                        name
                    </label>
                    <input id={'name'} name={'name'} className={styles.input} />
                </div>
                <div className={styles.input_div}>
                    <label>Email</label>
                    <input id={'email'} name={'email'} className={styles.input} />
                </div>
                <div className={styles.input_div}>
                    <label>Massage </label>
                    <input id={'Massage '} name={'Massage '} className={styles.input} />
                </div>
                <button className={styles.button}>Submit</button>
            </form>
        </div>
    );
}

export default App;
