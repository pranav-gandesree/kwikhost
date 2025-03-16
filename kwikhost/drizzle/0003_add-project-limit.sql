ALTER TABLE "user" ADD COLUMN "project_limit" integer DEFAULT 2;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "project_count" integer DEFAULT 0;