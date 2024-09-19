-- CreateTable
CREATE TABLE "characters" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "details" TEXT
);

-- CreateTable
CREATE TABLE "facts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "linkedfacts" (
    "character_id" INTEGER NOT NULL,
    "fact_id" INTEGER NOT NULL,

    PRIMARY KEY ("character_id", "fact_id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "active" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "Response" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content" BOOLEAN NOT NULL,
    "fact_id" INTEGER NOT NULL,
    "session_id" TEXT NOT NULL
);
