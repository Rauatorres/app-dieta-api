/*
  Warnings:

  - You are about to drop the column `ingredientes` on the `Prato` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Ingrediente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "idPrato" INTEGER NOT NULL,
    CONSTRAINT "Ingrediente_idPrato_fkey" FOREIGN KEY ("idPrato") REFERENCES "Prato" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Prato" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "preparo" TEXT,
    "idUsuario" INTEGER NOT NULL,
    CONSTRAINT "Prato_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Prato" ("categoria", "id", "idUsuario", "nome", "preparo") SELECT "categoria", "id", "idUsuario", "nome", "preparo" FROM "Prato";
DROP TABLE "Prato";
ALTER TABLE "new_Prato" RENAME TO "Prato";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
