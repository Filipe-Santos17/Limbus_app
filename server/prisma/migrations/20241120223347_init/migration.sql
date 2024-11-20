-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "residences" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "residences_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "rooms" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name_room" TEXT NOT NULL,
    "residence_id" TEXT NOT NULL,
    CONSTRAINT "rooms_residence_id_fkey" FOREIGN KEY ("residence_id") REFERENCES "residences" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "devices" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name_device" TEXT NOT NULL,
    "residence_id" TEXT NOT NULL,
    "room_id" TEXT NOT NULL,
    "health_check" BOOLEAN NOT NULL,
    "pressure" REAL NOT NULL,
    "flow" REAL NOT NULL,
    "time_data" DATETIME NOT NULL,
    CONSTRAINT "devices_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "rooms" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "devices_residence_id_fkey" FOREIGN KEY ("residence_id") REFERENCES "residences" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
