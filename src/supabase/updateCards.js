import { supabase } from "../../lib/supabase";

// esta funcion nos permite editar la columna que le indiques con el valor que pases 
export const UpdateCards = async (data) => {
    const { data, error } = await supabase
    .from('CreditCard')
    .update({ other_column: data })
    .eq('some_column', 'someValue')
    .select()  
}