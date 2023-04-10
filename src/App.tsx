import { useState } from 'react';
import styles from './App.module.scss';
import Classnames from 'classnames';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <div className={styles.contact_Us_Padding}>
                <h2 className={styles.H1_Form}>Contact Us</h2>
                <p className={styles.Paragraph_Form}>
                    Have a question? Fill out the form bellow and we&apos;ll get to you as soon as
                    we can
                </p>
                <p className={Classnames(styles.Paragraph_Form, styles.Grey_Paragraph)}>
                    all fields are required
                </p>
            </div>
            <form className={styles.form}>
                <div className={styles.input_div}>
                    <label className={styles.name} id={'name'} name={'name'}>
                        name
                    </label>
                    <input id={'name'} name={'name'} className={styles.input} />
                </div>
                <div className={styles.input_div}>
                    <label className={styles.name}>Email</label>
                    <input id={'email'} name={'email'} className={styles.input} />
                </div>
                <div className={styles.input_div}>
                    <label className={styles.name}>Massage </label>
                    <input id={'Massage '} name={'Massage '} className={styles.input} />
                </div>
                <div className={styles.buttonPadding}>
                    <button className={styles.button}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default App;
