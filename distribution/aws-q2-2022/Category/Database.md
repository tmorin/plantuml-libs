# Database


```text
aws-q2-2022/Category/Database
```

```text
include('aws-q2-2022/Category/Database')
```



| Illustration | Database | DatabaseCard | DatabaseGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../aws-q2-2022/Category/Database.png) | ![illustration for Database](../../aws-q2-2022/Category/Database.Local.png) | ![illustration for DatabaseCard](../../aws-q2-2022/Category/DatabaseCard.Local.png) | ![illustration for DatabaseGroup](../../aws-q2-2022/Category/DatabaseGroup.Local.png) |




## Database

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element Database
include('aws-q2-2022/Category/Database')

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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element Database
include('aws-q2-2022/Category/Database')

' renders the element
Database('Database', 'Database', 'an optional tech label')
@enduml
```

## DatabaseCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element DatabaseCard
include('aws-q2-2022/Category/Database')

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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element DatabaseCard
include('aws-q2-2022/Category/Database')

' renders the element
DatabaseCard('DatabaseCard', 'Database Card', 'an optional description')
@enduml
```

## DatabaseGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element DatabaseGroup
include('aws-q2-2022/Category/Database')

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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element DatabaseGroup
include('aws-q2-2022/Category/Database')

' renders the element
DatabaseGroup('DatabaseGroup', 'Database Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

