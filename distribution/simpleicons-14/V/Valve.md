# Valve


```text
simpleicons-14/V/Valve
```

```text
include('simpleicons-14/V/Valve')
```



| Illustration | Valve |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/V/Valve.png) | ![illustration for Valve](../../simpleicons-14/V/Valve.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ValveXs>`
- `<$ValveSm>`
- `<$ValveMd>`
- `<$ValveLg>`





## Valve

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Valve
include('simpleicons-14/V/Valve')

' renders the element
Valve('Valve', 'Valve', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Valve
include('simpleicons-14/V/Valve')

' renders the element
Valve('Valve', 'Valve', 'an optional tech label', 'an optional description')
@enduml
```

