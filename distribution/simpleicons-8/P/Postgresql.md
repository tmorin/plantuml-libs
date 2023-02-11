# Postgresql


```text
simpleicons-8/P/Postgresql
```

```text
include('simpleicons-8/P/Postgresql')
```



| Illustration | Postgresql |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Postgresql.png) | ![illustration for Postgresql](../../simpleicons-8/P/Postgresql.Local.png) |




## Postgresql

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Postgresql
include('simpleicons-8/P/Postgresql')

' renders the element
Postgresql('Postgresql', 'Postgresql', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Postgresql
include('simpleicons-8/P/Postgresql')

' renders the element
Postgresql('Postgresql', 'Postgresql', 'an optional tech label', 'an optional description')
@enduml
```

