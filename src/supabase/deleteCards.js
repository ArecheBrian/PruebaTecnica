import { supabase } from "../../lib/supabase";

// cons esta funcion puedes liminar un registro mediante el numero de la tarjeta 
export const DeleteCard = async (Numero) => {
    const { error } = await supabase
    .from('CreditCard')
    .delete()
    .eq('Numero', Numero)
    
}