CREATE TABLE "domain" (
	"id" text PRIMARY KEY NOT NULL,
	"domainName" text NOT NULL,
	"userId" text NOT NULL,
	"createdAt" timestamp NOT NULL,
	"updatedAt" timestamp NOT NULL,
	CONSTRAINT "domain_domainName_unique" UNIQUE("domainName")
);
--> statement-breakpoint
CREATE TABLE "file" (
	"id" text PRIMARY KEY NOT NULL,
	"domainId" text NOT NULL,
	"file_url" text NOT NULL,
	"file_type" text NOT NULL,
	"createdAt" timestamp NOT NULL,
	"updatedAt" timestamp NOT NULL
);
--> statement-breakpoint
ALTER TABLE "domain" ADD CONSTRAINT "domain_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "file" ADD CONSTRAINT "file_domainId_domain_id_fk" FOREIGN KEY ("domainId") REFERENCES "public"."domain"("id") ON DELETE cascade ON UPDATE no action;