import classNames from 'classnames';
import styles from './input-new.module.scss';

export interface InputNewProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-input-news-and-templates
 */
export const InputNew = ({ className }: InputNewProps) => {
    return <div className={classNames(styles.root, className)}></div>;
};
