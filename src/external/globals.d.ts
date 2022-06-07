import { Gtk } from './Gtk.js'

export {}

declare global {
	const imports: {
		gi: {
			versions: {
				Gtk: string
			},

			Gtk: Gtk,
		},
	}
}
