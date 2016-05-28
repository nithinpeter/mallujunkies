const common = {
    isBrowser: () => {
        if(typeof window != 'undefined') return true;
        return false;
    }
}

export default common;