# Database


```text
aws-20210131/Category/Database
```

```text
include('aws-20210131/Category/Database')
```



| Illustration | Database | DatabaseCard | DatabaseGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../aws-20210131/Category/Database.png) | ![illustration for Database](../../aws-20210131/Category/Database.Local.png) | ![illustration for DatabaseCard](../../aws-20210131/Category/DatabaseCard.Local.png) | ![illustration for DatabaseGroup](../../aws-20210131/Category/DatabaseGroup.Local.png) |




## Database

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element Database
include('aws-20210131/Category/Database')

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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element Database
include('aws-20210131/Category/Database')

' renders the element
Database('Database', 'Database', 'an optional tech label')
@enduml
```

## DatabaseCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element DatabaseCard
include('aws-20210131/Category/Database')

' renders the element
DatabaseCard('DatabaseCard', 'Database Card', 'an optional description')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element DatabaseCard
include('aws-20210131/Category/Database')

' renders the element
DatabaseCard('DatabaseCard', 'Database Card', 'an optional description')
@enduml
```

## DatabaseGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element DatabaseGroup
include('aws-20210131/Category/Database')

' renders the element
DatabaseGroup('DatabaseGroup', 'Database Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element DatabaseGroup
include('aws-20210131/Category/Database')

' renders the element
DatabaseGroup('DatabaseGroup', 'Database Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

