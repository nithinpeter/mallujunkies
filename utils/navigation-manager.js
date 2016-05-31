import { browserHistory }  from 'react-router';

class NavigationManager {
    static navigateTo(path, query = "") {
        browserHistory.push(path + query);
    }
}

export default NavigationManager;