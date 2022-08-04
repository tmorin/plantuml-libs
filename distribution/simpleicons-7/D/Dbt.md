# Dbt


```text
simpleicons-7/D/Dbt
```

```text
include('simpleicons-7/D/Dbt')
```



| Illustration | Dbt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/D/Dbt.png) | ![illustration for Dbt](../../simpleicons-7/D/Dbt.Local.png) |




## Dbt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Dbt
include('simpleicons-7/D/Dbt')

' renders the element
Dbt('Dbt', 'Dbt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dbt
include('simpleicons-7/D/Dbt')

' renders the element
Dbt('Dbt', 'Dbt', 'an optional tech label', 'an optional description')
@enduml
```

