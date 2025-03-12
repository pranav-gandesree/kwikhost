ALTER TABLE "domain" RENAME COLUMN "domainName" TO "domain";--> statement-breakpoint
ALTER TABLE "domain" DROP CONSTRAINT "domain_domainName_unique";--> statement-breakpoint
ALTER TABLE "account" ADD CONSTRAINT "account_provider_providerAccountId_pk" PRIMARY KEY("provider","providerAccountId");--> statement-breakpoint
ALTER TABLE "authenticator" ADD CONSTRAINT "authenticator_userId_credentialID_pk" PRIMARY KEY("userId","credentialID");--> statement-breakpoint
ALTER TABLE "verificationToken" ADD CONSTRAINT "verificationToken_identifier_token_pk" PRIMARY KEY("identifier","token");--> statement-breakpoint
ALTER TABLE "domain" ADD CONSTRAINT "domain_domain_unique" UNIQUE("domain");