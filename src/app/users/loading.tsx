import { FunctionComponent } from 'react';
import LoadingModal from '../components/LoadingModal';

interface LoadingProps {}

const Loading: FunctionComponent<LoadingProps> = () => {
    return <LoadingModal />;
};

export default Loading;
