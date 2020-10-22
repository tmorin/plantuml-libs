# Migration And Transfer

```text
aws-20200430/Item/MigrationTransfer/MigrationAndTransfer
```

```text
include('aws-20200430/Item/MigrationTransfer/MigrationAndTransfer')
```

|icon|card|element|group|
|---|---|---|---|
|![](MigrationAndTransfer.png)|![](MigrationAndTransfer.card.png)|![](MigrationAndTransfer.element.png)|![](MigrationAndTransfer.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the MigrationAndTransfer element
include('aws-20200430/Item/MigrationTransfer/MigrationAndTransfer')
MigrationAndTransferCard('migration_and_transfer', 'Migration And Transfer', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the MigrationAndTransfer element
include('aws-20200430/Item/MigrationTransfer/MigrationAndTransfer')
MigrationAndTransferCard('migration_and_transfer', 'Migration And Transfer', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the MigrationAndTransfer element
include('aws-20200430/Item/MigrationTransfer/MigrationAndTransfer')
MigrationAndTransfer('migration_and_transfer', 'Migration And Transfer', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the MigrationAndTransfer element
include('aws-20200430/Item/MigrationTransfer/MigrationAndTransfer')
MigrationAndTransfer('migration_and_transfer', 'Migration And Transfer', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the MigrationAndTransfer element
include('aws-20200430/Item/MigrationTransfer/MigrationAndTransfer')
MigrationAndTransferGroup('migration_and_transfer', 'Migration And Transfer', 'an optional tech field'){
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the MigrationAndTransfer element
include('aws-20200430/Item/MigrationTransfer/MigrationAndTransfer')
MigrationAndTransferGroup('migration_and_transfer', 'Migration And Transfer', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

