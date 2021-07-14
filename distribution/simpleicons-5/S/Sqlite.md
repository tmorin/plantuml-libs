# Sqlite


```text
simpleicons-5/S/Sqlite
```

```text
include('simpleicons-5/S/Sqlite')
```



| Illustration | Sqlite |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Sqlite.png) | ![illustration for Sqlite](../../simpleicons-5/S/Sqlite.Local.png) |




## Sqlite

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Sqlite
include('simpleicons-5/S/Sqlite')

' renders the element
Sqlite('Sqlite', 'Sqlite', 'an optional tech label')
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

' loads the Item which embeds the element Sqlite
include('simpleicons-5/S/Sqlite')

' renders the element
Sqlite('Sqlite', 'Sqlite', 'an optional tech label')
@enduml
```

