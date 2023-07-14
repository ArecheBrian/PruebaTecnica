import { supabase } from "../../lib/supabase";



export async function getCards() {
    try {  
      let { data, error} = await supabase.from("CreditCard").select("*");
      if (error) console.log("error", error);
      console.log(data)
      if (data) return data;
    } catch (err) {
      console.log(err.message);
    }
}
  