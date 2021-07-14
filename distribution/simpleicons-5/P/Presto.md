# Presto


```text
simpleicons-5/P/Presto
```

```text
include('simpleicons-5/P/Presto')
```



| Illustration | Presto |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Presto.png) | ![illustration for Presto](../../simpleicons-5/P/Presto.Local.png) |




## Presto

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Presto
include('simpleicons-5/P/Presto')

' renders the element
Presto('Presto', 'Presto', 'an optional tech label')
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

' loads the Item which embeds the element Presto
include('simpleicons-5/P/Presto')

' renders the element
Presto('Presto', 'Presto', 'an optional tech label')
@enduml
```

