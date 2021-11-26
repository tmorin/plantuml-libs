# Reacttable


```text
simpleicons-5/R/Reacttable
```

```text
include('simpleicons-5/R/Reacttable')
```



| Illustration | Reacttable |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Reacttable.png) | ![illustration for Reacttable](../../simpleicons-5/R/Reacttable.Local.png) |




## Reacttable

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Reacttable
include('simpleicons-5/R/Reacttable')

' renders the element
Reacttable('Reacttable', 'Reacttable', 'an optional tech label')
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

' loads the Item which embeds the element Reacttable
include('simpleicons-5/R/Reacttable')

' renders the element
Reacttable('Reacttable', 'Reacttable', 'an optional tech label')
@enduml
```

