import { createBoard } from '@wixc3/react-board';
import { InputNew } from '../../../components/input-new/input-new';

export default createBoard({
    name: 'InputNew',
    Board: () => <InputNew />
});
