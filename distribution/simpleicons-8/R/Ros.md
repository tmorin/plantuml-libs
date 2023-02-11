# Ros


```text
simpleicons-8/R/Ros
```

```text
include('simpleicons-8/R/Ros')
```



| Illustration | Ros |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/R/Ros.png) | ![illustration for Ros](../../simpleicons-8/R/Ros.Local.png) |




## Ros

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Ros
include('simpleicons-8/R/Ros')

' renders the element
Ros('Ros', 'Ros', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Ros
include('simpleicons-8/R/Ros')

' renders the element
Ros('Ros', 'Ros', 'an optional tech label', 'an optional description')
@enduml
```

