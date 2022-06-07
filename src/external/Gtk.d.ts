export type ApplicationEvent = 'activate'

declare class Application {
	constructor(x: { application_id: string })
	connect(event: ApplicationEvent, callback: () => void): void
	run(args: Array<string>): void
}

declare class ApplicationWindow {
	constructor(x: { application: Application })
	set_child(x: Widget): void
	present(): void
	close(): void
}

declare class Widget {}

declare class Button extends Widget {
	constructor(x: { label: string })
	connect: (event: 'clicked', callback: () => void) => void
}

export interface Gtk {
	Application: typeof Application,
	ApplicationWindow: typeof ApplicationWindow,
	Button: typeof Button,
}
