const AbstractRepository = require("./AbstractRepository");

class TranslatorRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "translators" as configuration
    super({ table: "translators" });
  }

  // The C of CRUD - Create operation

  async create(translator) {
    // Execute the SQL INSERT query to add a new translator to the "translators" table
    const [result] = await this.database.query(
      `insert into ${this.table} (Email, Password,FirstName,LastName,NumberPhone,language) values (?, ?, ?, ?, ?, ?)`,
      [
        translator.Email,
        translator.Password,
        translator.FirstName,
        translator.LastName,
        translator.NumberPhone,
        translator.language,
      ]
    );

    // Return the ID of the newly inserted client
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific translator by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the client
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all clients from the "CLIENTS" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of clients
    return rows;
  }

  // The U of CRUD - Update operation
  async update(translator) {
    const [result] = await this.database.query(
      `UPDATE ${this.table}  SET Email =?, Password =?,FirstName =?,LastName =?,NumberPhone =? WHERE Id_Translator = ?`,
      [
        translator.Email,
        translator.Password,
        translator.FirstName,
        translator.LastName,
        translator.NumberPhone,
        translator.language,
        translator.idTranslator,
      ]
    );
    return result;
  }

  // The D of CRUD - Delete operation

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} where id = ?`,
      [id]
    );

    return result;
  }
}

module.exports = TranslatorRepository;
