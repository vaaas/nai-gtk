import { Gtk } from './Gtk.js'

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
