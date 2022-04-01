# Liquibase


```text
simpleicons-6/L/Liquibase
```

```text
include('simpleicons-6/L/Liquibase')
```



| Illustration | Liquibase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/L/Liquibase.png) | ![illustration for Liquibase](../../simpleicons-6/L/Liquibase.Local.png) |




## Liquibase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Liquibase
include('simpleicons-6/L/Liquibase')

' renders the element
Liquibase('Liquibase', 'Liquibase', 'an optional tech label')
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

' loads the Item which embeds the element Liquibase
include('simpleicons-6/L/Liquibase')

' renders the element
Liquibase('Liquibase', 'Liquibase', 'an optional tech label')
@enduml
```

