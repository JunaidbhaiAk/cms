import {useQuery} from '@tanstack/react-query'
import { graphDataType } from '../utils/type';
import { getGraphData } from '../utils/api';

const useGraphData = () => {
    return useQuery<graphDataType[]>(['graph'],() => getGraphData());
}

export default useGraphData;