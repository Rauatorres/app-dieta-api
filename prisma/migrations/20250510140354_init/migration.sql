-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Prato" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "ingredientes" TEXT,
    "preparo" TEXT,
    "idUsuario" INTEGER NOT NULL,
    CONSTRAINT "Prato_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Dia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    CONSTRAINT "Dia_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PratoDia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idDia" INTEGER NOT NULL,
    "idPrato" INTEGER NOT NULL,
    CONSTRAINT "PratoDia_idDia_fkey" FOREIGN KEY ("idDia") REFERENCES "Dia" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PratoDia_idPrato_fkey" FOREIGN KEY ("idPrato") REFERENCES "Prato" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
