# Runkeeper


```text
simpleicons-7/R/Runkeeper
```

```text
include('simpleicons-7/R/Runkeeper')
```



| Illustration | Runkeeper |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/R/Runkeeper.png) | ![illustration for Runkeeper](../../simpleicons-7/R/Runkeeper.Local.png) |




## Runkeeper

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Runkeeper
include('simpleicons-7/R/Runkeeper')

' renders the element
Runkeeper('Runkeeper', 'Runkeeper', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Runkeeper
include('simpleicons-7/R/Runkeeper')

' renders the element
Runkeeper('Runkeeper', 'Runkeeper', 'an optional tech label', 'an optional description')
@enduml
```

