# Gtk


```text
simpleicons-14/G/Gtk
```

```text
include('simpleicons-14/G/Gtk')
```



| Illustration | Gtk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Gtk.png) | ![illustration for Gtk](../../simpleicons-14/G/Gtk.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GtkXs>`
- `<$GtkSm>`
- `<$GtkMd>`
- `<$GtkLg>`





## Gtk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Gtk
include('simpleicons-14/G/Gtk')

' renders the element
Gtk('Gtk', 'Gtk', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Gtk
include('simpleicons-14/G/Gtk')

' renders the element
Gtk('Gtk', 'Gtk', 'an optional tech label', 'an optional description')
@enduml
```

