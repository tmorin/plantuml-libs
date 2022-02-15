# Cockpit


```text
simpleicons-6/C/Cockpit
```

```text
include('simpleicons-6/C/Cockpit')
```



| Illustration | Cockpit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Cockpit.png) | ![illustration for Cockpit](../../simpleicons-6/C/Cockpit.Local.png) |




## Cockpit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Cockpit
include('simpleicons-6/C/Cockpit')

' renders the element
Cockpit('Cockpit', 'Cockpit', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Cockpit
include('simpleicons-6/C/Cockpit')

' renders the element
Cockpit('Cockpit', 'Cockpit', 'an optional tech label')
@enduml
```

