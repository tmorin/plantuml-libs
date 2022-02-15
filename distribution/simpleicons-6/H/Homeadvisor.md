# Homeadvisor


```text
simpleicons-6/H/Homeadvisor
```

```text
include('simpleicons-6/H/Homeadvisor')
```



| Illustration | Homeadvisor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/H/Homeadvisor.png) | ![illustration for Homeadvisor](../../simpleicons-6/H/Homeadvisor.Local.png) |




## Homeadvisor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Homeadvisor
include('simpleicons-6/H/Homeadvisor')

' renders the element
Homeadvisor('Homeadvisor', 'Homeadvisor', 'an optional tech label')
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

' loads the Item which embeds the element Homeadvisor
include('simpleicons-6/H/Homeadvisor')

' renders the element
Homeadvisor('Homeadvisor', 'Homeadvisor', 'an optional tech label')
@enduml
```

