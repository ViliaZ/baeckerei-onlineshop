export class User {
  userUid!: string;
  firstname?: string;
  lastname?: string;
  email: string;
  deliveryadress?: Object;
  invoiceadress?: Object;
  type?: string; // if end consumer, shop, supermarket, hotel etc.
  hasEditRights?: boolean; // is shopowner of a bakery shop, can edit his shop products

  constructor(obj?: any) {
    this.userUid = obj ? obj.userUid : '';
    this.firstname = obj ? obj.firstname : '';
    this.lastname = obj ? obj.lastname : '';
    this.email = obj ? obj.email : '';
    this.deliveryadress = obj ? obj.deliveryadress : '';
    this.invoiceadress = obj ? obj.invoiceadress : '';
    this.type = obj ? obj.type : 'unknown';
    this.hasEditRights = obj ? obj.hasEditRights : false;
  }

  toJson(){
    return {
        userUid: this.userUid,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        deliveryadress: this.deliveryadress,
        invoiceadress: this.invoiceadress,
        type: this.type,
        hasEditRights: this.hasEditRights
    }
  }
}
