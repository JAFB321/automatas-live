import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export const useId = () => {
    let [id] = useState(() => {
        return uuid()
    });

    return id;
}

export default useId;