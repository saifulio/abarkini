/**
 * Update users table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
exports.up = function (knex) {
    return knex.schema
        .createTable('user', table => {
            table.increments('id').primary().unsigned();
            table.string('first_name').notNullable();
            table.string('last_name').notNullable();
            table.string('email').notNullable();
            table.string('password', 32).notNullable();
            table.string('salt', 10).notNullable();
            table.bool('status').default(false);
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
        .createTable('address', table => {
            table.increments();
            table.string('house').notNullable();
            table.string('road').notNullable();
            table.string('city').notNullable();
            table.string('postcode').notNullable();
            table.bool('country').default(false);
            table.bool('user_id').notNullable;
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
        .createTable('category', table => {
            table.increments();
            table.string('parent_id').nullable();
            table.string('category_name').notNullable();
            table.text('desc').notNullable();
            table.string('image_url').nullable();
            table.json('category_type');
            table.bool('active').default(false);
        })
        .createTable('product', table => {
            table.increments();
            table.string('category_id').notNullable();
            table.string('product_name').notNullable();
            table.text('description').notNullable();
            table.text('image_url').nullable();
            table.bool('active').default(false);
            table.string ('unit_type').notNullable();
            table.float('unit_price');
        })
        .createTable('shop', table => {
            table.increments();
            table.string('shop_name').notNullable();
            table.string('user_id').notNullable();
            table.string('address').notNullable();
            table.string('created_at').notNullable();
            table.bool('active').default(false);
        })
        .createTable('order', table => {
            table.increments();
            table.string('user_id').notNullable();
            table.bool('payment_status').default(false);
            table.timestamp('order_date').nullable();
            table.timestamp('payment_date').nullable();            
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.bool('ordered').default(false);
        })
        .createTable('order_details', table => {
            table.increments();
            table.string('order_id').notNullable();
            table.string('product_id').notNullable();
            table.decimal('amount');
            table.string('size').nullable();
            table.string('color').nullable();
            table.timestamp('bill_date').nullable();
            table.timestamp('ship_date').nullable();
            table.timestamp('created_at').defaultTo(knex.fn.now());
        })
        .createTable('payment', table => {
            table.increments();
            table.enu('payment_type', ['NONE', 'CASH_ON_DELIVERY', 'STRIPE', 'BKASH', 'DEBIT_CARD', 'CREDIT_CARD']);
        })
        .createTable('shipping', table => {
            table.increments();
            table.string('company_name').notNullable();
            table.string('phone').notNullable();
        }).createTable('verification', table => {
            table.increments();
            table.decimal().notNullable();
            table.enu(verification_type, ['email', 'phone', 'address', 'nid', 'trade_licnse']);
            table.boolean('verified');
        });
};


/**
 * Drop salt column.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
exports.down = function (knex) {
    return knex.schema
        .dropTable("user")
        .dropTable("address")
        .dropTable("category")
        .dropTable("product")
        .dropTable("shop")
        .dropTable("order")
        .dropTable("order_details")
        .dropTable("payment")
        .dropTable("shipping")
        .dropTable("verification");
};
