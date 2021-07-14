# Valve


```text
simpleicons-5/V/Valve
```

```text
include('simpleicons-5/V/Valve')
```



| Illustration | Valve |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/V/Valve.png) | ![illustration for Valve](../../simpleicons-5/V/Valve.Local.png) |




## Valve

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Valve
include('simpleicons-5/V/Valve')

' renders the element
Valve('Valve', 'Valve', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Valve
include('simpleicons-5/V/Valve')

' renders the element
Valve('Valve', 'Valve', 'an optional tech label')
@enduml
```

