import React from 'react';
import { useState, useCallback, ChangeEvent } from 'react';

type onChangeType = (e: React.ChangeEvent<HTMLInputElement>) => void;

const useInput = (initValue = '') => {
    const [value, setValue] = useState(initValue);

    const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, []);

    return [value, handler, setValue] as [
        string,
        onChangeType,
        typeof setValue
    ];
};

export default useInput;
