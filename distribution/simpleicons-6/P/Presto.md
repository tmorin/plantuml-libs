# Presto


```text
simpleicons-6/P/Presto
```

```text
include('simpleicons-6/P/Presto')
```



| Illustration | Presto |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Presto.png) | ![illustration for Presto](../../simpleicons-6/P/Presto.Local.png) |




## Presto

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Presto
include('simpleicons-6/P/Presto')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Presto
include('simpleicons-6/P/Presto')

' renders the element
Presto('Presto', 'Presto', 'an optional tech label')
@enduml
```

