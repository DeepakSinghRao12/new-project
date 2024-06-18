const API_URL = "https://jsonplaceholder.typicode.com/posts"

export const submitForm = async(formData) => {
    try{
        const response= await fetch(`${API_URL}/posts`,{
            method: 'POST',
            body: JSON.stringfly({
                title:'foo',
                body:'bar',
                userIs:'1',
            }),
            headers: {
                'Content-type': 'appliation/json; charset=UTF-8',
            },
           // body: JSON.stringfly(formData),
        });
        if (!response.ok) {
            throw new Error("network response was not ok");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
