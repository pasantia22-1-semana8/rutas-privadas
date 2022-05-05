class FetchData{
    constructor(){
        this._root = 'http://localhost:3000/api/v1/';
    }

    request(url, method, data){
        return new Promise((resolve, reject) => {
            let options = {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            if(data){
                options.body = JSON.stringify(data);
            }

            fetch(this._root + url, options)
                .then(response => {
                    if(response.ok){
                        return response.json();
                    }
                    else{
                        throw new Error('Error: ' + response.status);
                    }
                })
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
}

export default FetchData;