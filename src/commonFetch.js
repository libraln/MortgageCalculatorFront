export default class CommonFetch {
    constructor(url) {
        this.url = url;
    }
    async get() {
        let response = await fetch(this.url);
        let result = await response.json();
        return result;
    }
    async post(headers, body) {
        let response = await fetch(this.url, {
            method: "POST",
            headers,
            body: JSON.stringify(body),
        });
        let result = await response.json();
        return result;
    }
    async delete(headers, body) {
        let response = await fetch(this.url, {
            method: "DELETE",
            headers,
            body: JSON.stringify(body),
        });
        let result = await response.json();
        return result;
    }
    async put(headers, body) {
        let response = await fetch(this.url, {
            method: "PUT",
            headers,
            body: JSON.stringify(body),
        });
        let result = await response.json();
        return result;
    }
}