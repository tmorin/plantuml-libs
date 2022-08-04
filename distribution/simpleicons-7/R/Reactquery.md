# Reactquery


```text
simpleicons-7/R/Reactquery
```

```text
include('simpleicons-7/R/Reactquery')
```



| Illustration | Reactquery |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/R/Reactquery.png) | ![illustration for Reactquery](../../simpleicons-7/R/Reactquery.Local.png) |




## Reactquery

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Reactquery
include('simpleicons-7/R/Reactquery')

' renders the element
Reactquery('Reactquery', 'Reactquery', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Reactquery
include('simpleicons-7/R/Reactquery')

' renders the element
Reactquery('Reactquery', 'Reactquery', 'an optional tech label', 'an optional description')
@enduml
```

