export function testMode() {
    return fetch("http://localhost:4500/api/v1/test")
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
}
