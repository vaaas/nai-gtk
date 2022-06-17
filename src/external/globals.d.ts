import { Gtk } from 'gtk-ts'

declare global {
	const imports: {
		gi: {
			versions: {
				Gtk: string
			},

			Gtk: Gtk,
		},
	}

	const console: {
		log: (...xs: any[]) => void,
	}
}
