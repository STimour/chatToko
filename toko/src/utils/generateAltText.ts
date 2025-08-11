/**
 * Génère un texte alt à partir d'un chemin d'image
 * @param imagePath - Le chemin de l'image (ex: "/icons/user.png")
 * @returns Le texte alt formaté (ex: "icons user format png")
 */
export const generateAltText = (imagePath: string): string => {
	return imagePath
		.replace(/\//g, ' ') // Remplace tous les "/"
		.replace(/\./g, ' format ') // Remplace tous les "."
		.trim(); // Supprime les espaces en début/fin
};

/**
 * Génère un texte alt plus propre à partir du nom de fichier
 * @param imagePath - Le chemin de l'image
 * @returns Le nom de fichier sans extension
 */
export const generateCleanAltText = (imagePath: string): string => {
	const fileName = imagePath.split('/').pop() || ''; // Récupère le nom de fichier
	return fileName.replace(/\.[^/.]+$/, ''); // Supprime l'extension
};
