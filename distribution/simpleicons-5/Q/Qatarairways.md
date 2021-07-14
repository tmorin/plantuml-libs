# Qatarairways


```text
simpleicons-5/Q/Qatarairways
```

```text
include('simpleicons-5/Q/Qatarairways')
```



| Illustration | Qatarairways |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/Q/Qatarairways.png) | ![illustration for Qatarairways](../../simpleicons-5/Q/Qatarairways.Local.png) |




## Qatarairways

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Qatarairways
include('simpleicons-5/Q/Qatarairways')

' renders the element
Qatarairways('Qatarairways', 'Qatarairways', 'an optional tech label')
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

' loads the Item which embeds the element Qatarairways
include('simpleicons-5/Q/Qatarairways')

' renders the element
Qatarairways('Qatarairways', 'Qatarairways', 'an optional tech label')
@enduml
```

