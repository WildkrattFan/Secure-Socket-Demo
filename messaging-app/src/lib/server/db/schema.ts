
import { pgTable, serial, integer, text, uniqueIndex } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: serial('id').primaryKey(),
	age: integer('age')
});

export const room = pgTable('room',{
	id: serial('id').primaryKey(),
	roomcode: text('roomcode').notNull(),
}, (table) => [
	uniqueIndex("room_idx").on(table.roomcode)
]);