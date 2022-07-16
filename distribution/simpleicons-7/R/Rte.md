# Rte


```text
simpleicons-7/R/Rte
```

```text
include('simpleicons-7/R/Rte')
```



| Illustration | Rte |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/R/Rte.png) | ![illustration for Rte](../../simpleicons-7/R/Rte.Local.png) |




## Rte

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Rte
include('simpleicons-7/R/Rte')

' renders the element
Rte('Rte', 'Rte', 'an optional tech label')
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

' loads the Item which embeds the element Rte
include('simpleicons-7/R/Rte')

' renders the element
Rte('Rte', 'Rte', 'an optional tech label')
@enduml
```

