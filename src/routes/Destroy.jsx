import { redirect } from "react-router-dom";
import { deleteContact } from "../utils/contact";

export async function destroyAction({ params }) {
  // throw new Error('oh dang')
  await deleteContact(params.contactId)
  return redirect('/')
}
