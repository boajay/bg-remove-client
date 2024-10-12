import React, { useState, useCallback, useEffect } from 'react';
export function useReload() {
    const [reloading, setReloading] = useState(false);
    const reload = useCallback(() => {
        setReloading(true);
    }, [setReloading]);

    useEffect(() => {
        if (reloading) {
            setReloading(false);
        }
    }, [reloading, setReloading]);

    return [reload, reloading];
}