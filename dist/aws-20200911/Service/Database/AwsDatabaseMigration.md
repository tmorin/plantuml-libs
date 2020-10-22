# Aws Database Migration

```text
aws-20200911/Service/Database/AwsDatabaseMigration
```

```text
include('aws-20200911/Service/Database/AwsDatabaseMigration')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsDatabaseMigration.png)|![](AwsDatabaseMigration.card.png)|![](AwsDatabaseMigration.element.png)|![](AwsDatabaseMigration.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsDatabaseMigration element
include('aws-20200911/Service/Database/AwsDatabaseMigration')
AwsDatabaseMigrationCard('aws_database_migration', 'Aws Database Migration', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsDatabaseMigration element
include('aws-20200911/Service/Database/AwsDatabaseMigration')
AwsDatabaseMigrationCard('aws_database_migration', 'Aws Database Migration', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsDatabaseMigration element
include('aws-20200911/Service/Database/AwsDatabaseMigration')
AwsDatabaseMigration('aws_database_migration', 'Aws Database Migration', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsDatabaseMigration element
include('aws-20200911/Service/Database/AwsDatabaseMigration')
AwsDatabaseMigration('aws_database_migration', 'Aws Database Migration', 'an optional tech field')
@enduml
```


## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsDatabaseMigration element
include('aws-20200911/Service/Database/AwsDatabaseMigration')
AwsDatabaseMigrationGroup('aws_database_migration', 'Aws Database Migration', 'an optional tech field'){
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
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsDatabaseMigration element
include('aws-20200911/Service/Database/AwsDatabaseMigration')
AwsDatabaseMigrationGroup('aws_database_migration', 'Aws Database Migration', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

