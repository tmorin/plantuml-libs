# Databricks


```text
simpleicons-5/D/Databricks
```

```text
include('simpleicons-5/D/Databricks')
```



| Illustration | Databricks |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Databricks.png) | ![illustration for Databricks](../../simpleicons-5/D/Databricks.Local.png) |




## Databricks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Databricks
include('simpleicons-5/D/Databricks')

' renders the element
Databricks('Databricks', 'Databricks', 'an optional tech label')
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

' loads the Item which embeds the element Databricks
include('simpleicons-5/D/Databricks')

' renders the element
Databricks('Databricks', 'Databricks', 'an optional tech label')
@enduml
```

