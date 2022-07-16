# Pyg


```text
simpleicons-7/P/Pyg
```

```text
include('simpleicons-7/P/Pyg')
```



| Illustration | Pyg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Pyg.png) | ![illustration for Pyg](../../simpleicons-7/P/Pyg.Local.png) |




## Pyg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Pyg
include('simpleicons-7/P/Pyg')

' renders the element
Pyg('Pyg', 'Pyg', 'an optional tech label')
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

' loads the Item which embeds the element Pyg
include('simpleicons-7/P/Pyg')

' renders the element
Pyg('Pyg', 'Pyg', 'an optional tech label')
@enduml
```

