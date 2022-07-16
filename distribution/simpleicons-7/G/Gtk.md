# Gtk


```text
simpleicons-7/G/Gtk
```

```text
include('simpleicons-7/G/Gtk')
```



| Illustration | Gtk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Gtk.png) | ![illustration for Gtk](../../simpleicons-7/G/Gtk.Local.png) |




## Gtk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Gtk
include('simpleicons-7/G/Gtk')

' renders the element
Gtk('Gtk', 'Gtk', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Gtk
include('simpleicons-7/G/Gtk')

' renders the element
Gtk('Gtk', 'Gtk', 'an optional tech label')
@enduml
```

