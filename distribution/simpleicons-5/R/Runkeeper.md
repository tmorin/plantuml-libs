# Runkeeper


```text
simpleicons-5/R/Runkeeper
```

```text
include('simpleicons-5/R/Runkeeper')
```



| Illustration | Runkeeper |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Runkeeper.png) | ![illustration for Runkeeper](../../simpleicons-5/R/Runkeeper.Local.png) |




## Runkeeper

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Runkeeper
include('simpleicons-5/R/Runkeeper')

' renders the element
Runkeeper('Runkeeper', 'Runkeeper', 'an optional tech label')
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

' loads the Item which embeds the element Runkeeper
include('simpleicons-5/R/Runkeeper')

' renders the element
Runkeeper('Runkeeper', 'Runkeeper', 'an optional tech label')
@enduml
```

