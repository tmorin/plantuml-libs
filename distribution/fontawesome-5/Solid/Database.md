# Database


```text
fontawesome-5/Solid/Database
```

```text
include('fontawesome-5/Solid/Database')
```



| Illustration | Database |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Database.png) | ![illustration for Database](../../fontawesome-5/Solid/Database.Local.png) |




## Database

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Database
include('fontawesome-5/Solid/Database')

' renders the element
Database('Database', 'Database', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Database
include('fontawesome-5/Solid/Database')

' renders the element
Database('Database', 'Database', 'an optional tech label')
@enduml
```

