# Liquibase


```text
simpleicons-8/L/Liquibase
```

```text
include('simpleicons-8/L/Liquibase')
```



| Illustration | Liquibase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/L/Liquibase.png) | ![illustration for Liquibase](../../simpleicons-8/L/Liquibase.Local.png) |




## Liquibase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Liquibase
include('simpleicons-8/L/Liquibase')

' renders the element
Liquibase('Liquibase', 'Liquibase', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Liquibase
include('simpleicons-8/L/Liquibase')

' renders the element
Liquibase('Liquibase', 'Liquibase', 'an optional tech label', 'an optional description')
@enduml
```

