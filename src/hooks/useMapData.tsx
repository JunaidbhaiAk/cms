import { getMapData } from "../utils/api";
import {useQuery} from '@tanstack/react-query'
import { mapDataType } from "../utils/type";
const useMapData = () => {
    return useQuery<mapDataType[]>(['map'],() => getMapData())
}

export default useMapData;