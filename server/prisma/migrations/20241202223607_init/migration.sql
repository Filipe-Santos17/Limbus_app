-- CreateTable
CREATE TABLE "DataDevice" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pressao" REAL NOT NULL,
    "vazao" REAL NOT NULL,
    "data" DATETIME NOT NULL
);
