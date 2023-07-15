import { supabase } from "../../lib/supabase";

export const UploadCards = async (data) => {
    try {
        const res = await supabase.from("CreditCard").insert(data).select();
        if (res) alert("Order Registered Correctly ✅");
    } catch(err) {
        alert("Error creating order ❌");
        console.log(err, err.message);
        return false;
    }
}