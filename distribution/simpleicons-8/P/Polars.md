# Polars


```text
simpleicons-8/P/Polars
```

```text
include('simpleicons-8/P/Polars')
```



| Illustration | Polars |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Polars.png) | ![illustration for Polars](../../simpleicons-8/P/Polars.Local.png) |




## Polars

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Polars
include('simpleicons-8/P/Polars')

' renders the element
Polars('Polars', 'Polars', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Polars
include('simpleicons-8/P/Polars')

' renders the element
Polars('Polars', 'Polars', 'an optional tech label', 'an optional description')
@enduml
```

