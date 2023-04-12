export interface Library {
  name: string
  remote_url: string
  packages: Array<Package>
  templates?: LibraryTemplates
  customization?: Customization
  tera_discovery_pattern?: string
}

export interface Customization {
  icon_format?: string
  icon_height?: number
  text_width_max?: number
  msg_width_max?: number
  font_size_xs?: number
  font_size_sm?: number
  font_size_md?: number
  font_size_lg?: number
  font_color?: string
  font_color_light?: string
}

export interface LibraryTemplates {
  bootstrap?: string
  documentation?: string
}

export interface Package {
  urn: string
  modules: Array<Module>
  examples: Array<Example>
  templates?: PackageTemplates
  rendering?: PackageRendering
}

export interface PackageTemplates {
  bootstrap?: string
  documentation?: string
}

export interface PackageRendering {
  skip_embedded?: boolean
}

export interface Example {
  name: string
  template: string
}

export interface Module {
  urn: string
  items: Array<Item>
  templates?: ModuleTemplates
}

export interface ModuleTemplates {
  documentation?: string
}

export interface Item {
  urn: string
  family?: string
  icon?: SourceIcon | ReferenceIcon
  elements: Array<Element>
  templates?: ItemTemplates
}

export interface ItemTemplates {
  documentation?: string
  source?: string
  snippet?: string
}

export interface Icon {
  type: "Source" | "Reference"
}

export interface SourceIcon {
  type: "Source"
  source: string
}

export interface ReferenceIcon {
  type: "Reference"
  urn: string
}

export interface Element {
  shape: IconShape | IconCardShape | IconGroupShape | GroupShape | CustomShape
}

export interface Shape {
  type: "Icon" | "IconCard" | "IconGroup" | "Group" | "Custom"
}

export interface IconShape extends Shape {
  type: "Icon"
  stereotype_name?: string
  properties?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  }
}

export interface IconCardShape extends Shape {
  type: "IconCard"
  stereotype_name?: string
  properties?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  }
}

export interface IconGroupShape extends Shape {
  type: "IconGroup"
  stereotype_name?: string
  properties?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  }
}

export interface GroupShape extends Shape {
  type: "Group"
  stereotype_name?: string
  properties?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  }
}

export interface CustomShape extends Shape {
  type: "Custom"
  properties?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  }
}
