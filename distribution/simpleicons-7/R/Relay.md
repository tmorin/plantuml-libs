# Relay


```text
simpleicons-7/R/Relay
```

```text
include('simpleicons-7/R/Relay')
```



| Illustration | Relay |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/R/Relay.png) | ![illustration for Relay](../../simpleicons-7/R/Relay.Local.png) |




## Relay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Relay
include('simpleicons-7/R/Relay')

' renders the element
Relay('Relay', 'Relay', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Relay
include('simpleicons-7/R/Relay')

' renders the element
Relay('Relay', 'Relay', 'an optional tech label', 'an optional description')
@enduml
```

