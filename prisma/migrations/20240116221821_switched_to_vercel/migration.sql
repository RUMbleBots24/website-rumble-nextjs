-- CreateTable
CREATE TABLE "Member" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT,
    "middleName" TEXT,
    "lastName1" TEXT,
    "lastName2" TEXT,
    "major" TEXT,
    "linkedin" TEXT,
    "profileImg" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bot" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "desc" TEXT,
    "weight" TEXT,
    "category" TEXT,
    "logo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "alt" TEXT,
    "path" TEXT,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BotToMember" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_BotToImage" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Member_email_key" ON "Member"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_BotToMember_AB_unique" ON "_BotToMember"("A", "B");

-- CreateIndex
CREATE INDEX "_BotToMember_B_index" ON "_BotToMember"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BotToImage_AB_unique" ON "_BotToImage"("A", "B");

-- CreateIndex
CREATE INDEX "_BotToImage_B_index" ON "_BotToImage"("B");

-- AddForeignKey
ALTER TABLE "_BotToMember" ADD CONSTRAINT "_BotToMember_A_fkey" FOREIGN KEY ("A") REFERENCES "Bot"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BotToMember" ADD CONSTRAINT "_BotToMember_B_fkey" FOREIGN KEY ("B") REFERENCES "Member"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BotToImage" ADD CONSTRAINT "_BotToImage_A_fkey" FOREIGN KEY ("A") REFERENCES "Bot"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BotToImage" ADD CONSTRAINT "_BotToImage_B_fkey" FOREIGN KEY ("B") REFERENCES "Image"("id") ON DELETE CASCADE ON UPDATE CASCADE;
