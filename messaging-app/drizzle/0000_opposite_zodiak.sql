CREATE TABLE "room" (
	"id" serial PRIMARY KEY NOT NULL,
	"roomcode" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"age" integer
);
--> statement-breakpoint
CREATE UNIQUE INDEX "room_idx" ON "room" USING btree ("roomcode");