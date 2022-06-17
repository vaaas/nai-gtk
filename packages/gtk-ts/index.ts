type ValueOf<T> = T[keyof T]

export type ApplicationEvent = 'activate'

declare class Application {
	constructor(x: { application_id: string })
	connect(event: ApplicationEvent, callback: (x: Application) => void): void
	run(args: Array<string>): void
}

declare class ApplicationWindow {
	constructor(x: { application: Application })
	set_child(x: Widget): void
	present(): void
	close(): void
}

declare class Widget {
	add_css_class(x: string): void
}

declare class Button extends Widget {
	constructor(x: { label: string })
	connect: (event: 'clicked', callback: () => void) => void
}

declare class Box extends Widget {
	constructor(x: { orientation: ValueOf<Orientation>, spacing: number })
	append(x: Widget): void
}

declare class ListBox extends Widget {
	constructor()
	append(x: Widget): void
}

declare class Grid extends Widget {
	constructor()
	attach(child: Widget, column: number, row: number, width: number, height: number): void
	set_column_homogeneous(x: boolean): void
	set_column_spacing(x: number): void
	set_row_spacing(x: number): void
}

declare class Entry extends Widget {
	constructor()
}

declare class PasswordEntry extends Widget {
	constructor()
}

declare class Label extends Widget {
	constructor(x: { label: string })
}

type Orientation = {
	readonly HORIZONTAL: unique symbol,
	readonly VERTICAL: unique symbol,
}

interface Gtk {
	Application: typeof Application,
	ApplicationWindow: typeof ApplicationWindow,
	Widget: typeof Widget,
	Button: typeof Button,
	Box: typeof Box,
	ListBox: typeof ListBox,
	Label: typeof Label,
	Entry: typeof Entry,
	PasswordEntry: typeof PasswordEntry,
	Grid: typeof Grid,
	Orientation: Orientation,
}

export {
	Application,
	ApplicationWindow,
	Widget,
	Button,
	Box,
	ListBox,
	Label,
	Entry,
	PasswordEntry,
	Grid,
	Orientation,
	Gtk,
}
