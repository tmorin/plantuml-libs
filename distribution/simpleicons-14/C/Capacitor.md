# Capacitor


```text
simpleicons-14/C/Capacitor
```

```text
include('simpleicons-14/C/Capacitor')
```



| Illustration | Capacitor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Capacitor.png) | ![illustration for Capacitor](../../simpleicons-14/C/Capacitor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CapacitorXs>`
- `<$CapacitorSm>`
- `<$CapacitorMd>`
- `<$CapacitorLg>`





## Capacitor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Capacitor
include('simpleicons-14/C/Capacitor')

' renders the element
Capacitor('Capacitor', 'Capacitor', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Capacitor
include('simpleicons-14/C/Capacitor')

' renders the element
Capacitor('Capacitor', 'Capacitor', 'an optional tech label', 'an optional description')
@enduml
```

