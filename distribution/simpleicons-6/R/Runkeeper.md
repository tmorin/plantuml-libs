# Runkeeper


```text
simpleicons-6/R/Runkeeper
```

```text
include('simpleicons-6/R/Runkeeper')
```



| Illustration | Runkeeper |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Runkeeper.png) | ![illustration for Runkeeper](../../simpleicons-6/R/Runkeeper.Local.png) |




## Runkeeper

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Runkeeper
include('simpleicons-6/R/Runkeeper')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Runkeeper
include('simpleicons-6/R/Runkeeper')

' renders the element
Runkeeper('Runkeeper', 'Runkeeper', 'an optional tech label')
@enduml
```

