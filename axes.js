// 9hoch9 / axes.js

export function computeAxes(Phi, phi, phi2, phiinfty) {
    const achsenwert = (Phi + phi + phi2 + phiinfty) / 4;

    return {
        x: Phi * 0.5 + phi * 0.3 + phi2 * 0.2,
        y: phi * 0.4 + phi2 * 0.4 + phiinfty * 0.2,
        z: achsenwert,
        Phi,
        phi,
        phi2,
        phiinfty,
        bewegung: Phi * phi,
        stabilitaet: phi2 - phi,
        achsenwert
    };
}
