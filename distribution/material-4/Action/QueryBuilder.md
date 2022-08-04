# QueryBuilder


```text
material-4/Action/QueryBuilder
```

```text
include('material-4/Action/QueryBuilder')
```



| Illustration | QueryBuilder |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/QueryBuilder.png) | ![illustration for QueryBuilder](../../material-4/Action/QueryBuilder.Local.png) |




## QueryBuilder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element QueryBuilder
include('material-4/Action/QueryBuilder')

' renders the element
QueryBuilder('QueryBuilder', 'Query Builder', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element QueryBuilder
include('material-4/Action/QueryBuilder')

' renders the element
QueryBuilder('QueryBuilder', 'Query Builder', 'an optional tech label', 'an optional description')
@enduml
```

