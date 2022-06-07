imports.gi.versions['Gtk'] = '4.0'
const Gtk = imports.gi.Gtk
type Application = import('./external/Gtk.js').Application

function on_activate(app: Application) {
	// … create a new window …
	const win = new Gtk.ApplicationWindow({ application: app })

	// … with a button in it …
	const btn = new Gtk.Button({ label: 'Hello, World!' })

	// … which closes the window when clicked
	btn.connect('clicked', () => { win.close() })
	win.set_child(btn)
	win.present()
}

function main() {
	const app = new Gtk.Application({
		application_id: 'com.example.GtkApplication',
	})

	app.connect('activate', on_activate)
	app.run([])
}

main()
