# Cockpit


```text
simpleicons-5/C/Cockpit
```

```text
include('simpleicons-5/C/Cockpit')
```



| Illustration | Cockpit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Cockpit.png) | ![illustration for Cockpit](../../simpleicons-5/C/Cockpit.Local.png) |




## Cockpit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Cockpit
include('simpleicons-5/C/Cockpit')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Cockpit
include('simpleicons-5/C/Cockpit')

' renders the element
Cockpit('Cockpit', 'Cockpit', 'an optional tech label')
@enduml
```

