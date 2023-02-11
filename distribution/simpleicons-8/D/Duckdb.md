# Duckdb


```text
simpleicons-8/D/Duckdb
```

```text
include('simpleicons-8/D/Duckdb')
```



| Illustration | Duckdb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/D/Duckdb.png) | ![illustration for Duckdb](../../simpleicons-8/D/Duckdb.Local.png) |




## Duckdb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Duckdb
include('simpleicons-8/D/Duckdb')

' renders the element
Duckdb('Duckdb', 'Duckdb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Duckdb
include('simpleicons-8/D/Duckdb')

' renders the element
Duckdb('Duckdb', 'Duckdb', 'an optional tech label', 'an optional description')
@enduml
```

