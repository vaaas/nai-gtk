imports.gi.versions['Gtk'] = '4.0'
const Gtk = imports.gi.Gtk
type Application = import('./external/Gtk.js').Application

function on_activate(app: Application) {
	const win = new Gtk.ApplicationWindow({ application: app })

	const btn = new Gtk.Button({ label: 'Login' })
	btn.connect('clicked', () => { win.close() })
	btn.add_css_class('suggested-action')

	const username_label = new Gtk.Label({ label: 'Username' })
	const username_entry = new Gtk.Entry()

	const password_label = new Gtk.Label({ label: 'Password' })
	const password_entry = new Gtk.PasswordEntry()

	const grid = new Gtk.Grid()
	grid.attach(username_label, 1, 1, 1, 1)
	grid.attach(username_entry, 2, 1, 1, 1)
	grid.attach(password_label, 1, 2, 1, 1)
	grid.attach(password_entry, 2, 2, 1, 1)
	grid.attach(btn, 1, 3, 2, 1)
	grid.set_row_spacing(10)
	grid.set_column_spacing(10)

	win.set_child(grid)
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
