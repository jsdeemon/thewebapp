import axios from 'axios'

export async function getDataFromIp(ip : string) {
    try {
        const response = await axios.get(`https://api.iplocation.net/?ip=${ip}`, {
            headers: {
                'Access-Control-Allow-Origin': 'https://api.iplocation.net'
            }
        });

        // 31.148.147.172
        if (!response.data.country_name) {
            return 'Произошла ошибка! Пожалуйства, проверьте правильность введенного IP'
        } else {
            return response
            console.log(response)
        } 
    } catch (error) {
        console.error(error);
    }
}