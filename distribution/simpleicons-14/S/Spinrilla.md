# Spinrilla


```text
simpleicons-14/S/Spinrilla
```

```text
include('simpleicons-14/S/Spinrilla')
```



| Illustration | Spinrilla |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Spinrilla.png) | ![illustration for Spinrilla](../../simpleicons-14/S/Spinrilla.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SpinrillaXs>`
- `<$SpinrillaSm>`
- `<$SpinrillaMd>`
- `<$SpinrillaLg>`





## Spinrilla

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Spinrilla
include('simpleicons-14/S/Spinrilla')

' renders the element
Spinrilla('Spinrilla', 'Spinrilla', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Spinrilla
include('simpleicons-14/S/Spinrilla')

' renders the element
Spinrilla('Spinrilla', 'Spinrilla', 'an optional tech label', 'an optional description')
@enduml
```

