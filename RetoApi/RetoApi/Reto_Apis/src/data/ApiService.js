class DataService {

    //JSON LOCAL
      static async getSectores(){
        const res = await fetch( "/data/sectores.json");

        if(!res.ok){
            throw new Error(`GET_ERROR [sectores.json] - ${res.status}`);
        }
        return await res.json();

    }

    static BASE_URL = "https://api.coingecko.com/api/v3"; // API aquí

    //  GET
    static async getCrypto(ids = "bitcoin,ethereum") {//Si solo estás usando un JSON local: NO necesitas endpoint:<--si vamos a usar solo el json, quitamos elendpoint dentro del get
        try {
            
            const url =  `${this.BASE_URL}/simple/price?ids=${ids}&vs_currencies=usd`;
            const res = await fetch(url);

            if (!res.ok) {
                throw new Error(`GET_ERROR [crypto] - ${res.status}`);
            }

            return await res.json();

        } catch (error) {
            console.error("❌ Error en crypto::", error.message);
            throw error;
        }
    }
}