
let audios = [nota_1.wav, nota_2.wav, nota_2_c.wav, nota_2_f.wav, nota_3.wav, nota_3_c.wav, nota_3_cf.wav, nota_3_cm.wav, nota_3_f.wav, nota_3_m.wav, nota_3_mf.wav, nota_4.wav, pausa_1.wav]
let escalas_sons = {
    "A":  ["A_ionico.wav",  "A_lidio.wav",  "A_frígio.wav",  "A_mixolidio.wav",  "A_dorio.wav"],
    "Bb": ["Bb_ionico.wav", "Bb_lidio.wav", "Bb_frígio.wav", "Bb_mixolidio.wav", "Bb_dorio.wav"],
    "B":  ["B_ionico.wav",  "B_lidio.wav",  "B_frígio.wav",  "B_mixolidio.wav",  "B_dorio.wav"],
    "C":  ["C_ionico.wav",  "C_lidio.wav",  "C_frígio.wav",  "C_mixolidio.wav",  "C_dorio.wav"],
    "C#": ["C#_ionico.wav", "C#_lidio.wav", "C#_frígio.wav", "C#_mixolidio.wav", "C#_dorio.wav"],
    "D":  ["D_ionico.wav",  "D_lidio.wav",  "D_frígio.wav",  "D_mixolidio.wav",  "D_dorio.wav"],
    "Eb": ["Eb_ionico.wav", "Eb_lidio.wav", "Eb_frígio.wav", "Eb_mixolidio.wav", "Eb_dorio.wav"],
    "E":  ["E_ionico.wav",  "E_lidio.wav",  "E_frígio.wav",  "E_mixolidio.wav",  "E_dorio.wav"],
    "F":  ["F_ionico.wav",  "F_lidio.wav",  "F_frígio.wav",  "F_mixolidio.wav",  "F_dorio.wav"],
    "F#": ["F#_ionico.wav", "F#_lidio.wav", "F#_frígio.wav", "F#_mixolidio.wav", "F#_dorio.wav"],
    "G":  ["G_ionico.wav",  "G_lidio.wav",  "G_frígio.wav",  "G_mixolidio.wav",  "G_dorio.wav"],
    "G#": ["G#_ionico.wav", "G#_lidio.wav", "G#_frígio.wav", "G#_mixolidio.wav", "G#_dorio.wav"]
}
let escalas = {
    "A":  ["A_ionico.svg",  "A_lidio.svg",  "A_frígio.svg",  "A_mixolidio.svg",  "A_dorio.svg"],
    "Bb": ["Bb_ionico.svg", "Bb_lidio.svg", "Bb_frígio.svg", "Bb_mixolidio.svg", "Bb_dorio.svg"],
    "B":  ["B_ionico.svg",  "B_lidio.svg",  "B_frígio.svg",  "B_mixolidio.svg",  "B_dorio.svg"],
    "C":  ["C_ionico.svg",  "C_lidio.svg",  "C_frígio.svg",  "C_mixolidio.svg",  "C_dorio.svg"],
    "C#": ["C#_ionico.svg", "C#_lidio.svg", "C#_frígio.svg", "C#_mixolidio.svg", "C#_dorio.svg"],
    "D":  ["D_ionico.svg",  "D_lidio.svg",  "D_frígio.svg",  "D_mixolidio.svg",  "D_dorio.svg"],
    "Eb": ["Eb_ionico.svg", "Eb_lidio.svg", "Eb_frígio.svg", "Eb_mixolidio.svg", "Eb_dorio.svg"],
    "E":  ["E_ionico.svg",  "E_lidio.svg",  "E_frígio.svg",  "E_mixolidio.svg",  "E_dorio.svg"],
    "F":  ["F_ionico.svg",  "F_lidio.svg",  "F_frígio.svg",  "F_mixolidio.svg",  "F_dorio.svg"],
    "F#": ["F#_ionico.svg", "F#_lidio.svg", "F#_frígio.svg", "F#_mixolidio.svg", "F#_dorio.svg"],
    "G":  ["G_ionico.svg",  "G_lidio.svg",  "G_frígio.svg",  "G_mixolidio.svg",  "G_dorio.svg"],
    "G#": ["G#_ionico.svg", "G#_lidio.svg", "G#_frígio.svg", "G#_mixolidio.svg", "G#_dorio.wav"]
}
let counter = 0
audios.src = 'sound/'+ audios[counter]
