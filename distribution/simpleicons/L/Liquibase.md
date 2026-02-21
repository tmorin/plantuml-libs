# Liquibase


```text
simpleicons/L/Liquibase
```

```text
include('simpleicons/L/Liquibase')
```



| Illustration | Liquibase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Liquibase.png) | ![illustration for Liquibase](../../simpleicons/L/Liquibase.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LiquibaseXs>`
- `<$LiquibaseSm>`
- `<$LiquibaseMd>`
- `<$LiquibaseLg>`





## Liquibase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Liquibase
include('simpleicons/L/Liquibase')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Liquibase
include('simpleicons/L/Liquibase')

' renders the element
Liquibase('Liquibase', 'Liquibase', 'an optional tech label', 'an optional description')
@enduml
```

