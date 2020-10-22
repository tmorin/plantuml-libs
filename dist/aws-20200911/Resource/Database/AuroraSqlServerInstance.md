# Aurora Sql Server Instance

```text
aws-20200911/Resource/Database/AuroraSqlServerInstance
```

```text
include('aws-20200911/Resource/Database/AuroraSqlServerInstance')
```

|icon|card|element|group|
|---|---|---|---|
|![](AuroraSqlServerInstance.png)|![](AuroraSqlServerInstance.card.png)|![](AuroraSqlServerInstance.element.png)|![](AuroraSqlServerInstance.group.png)|



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
' loads the AuroraSqlServerInstance element
include('aws-20200911/Resource/Database/AuroraSqlServerInstance')
AuroraSqlServerInstanceCard('aurora_sql_server_instance', 'Aurora Sql Server Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AuroraSqlServerInstance element
include('aws-20200911/Resource/Database/AuroraSqlServerInstance')
AuroraSqlServerInstanceCard('aurora_sql_server_instance', 'Aurora Sql Server Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AuroraSqlServerInstance element
include('aws-20200911/Resource/Database/AuroraSqlServerInstance')
AuroraSqlServerInstance('aurora_sql_server_instance', 'Aurora Sql Server Instance', 'an optional tech field')
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
' loads the AuroraSqlServerInstance element
include('aws-20200911/Resource/Database/AuroraSqlServerInstance')
AuroraSqlServerInstance('aurora_sql_server_instance', 'Aurora Sql Server Instance', 'an optional tech field')
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
' loads the AuroraSqlServerInstance element
include('aws-20200911/Resource/Database/AuroraSqlServerInstance')
AuroraSqlServerInstanceGroup('aurora_sql_server_instance', 'Aurora Sql Server Instance', 'an optional tech field'){
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
' loads the AuroraSqlServerInstance element
include('aws-20200911/Resource/Database/AuroraSqlServerInstance')
AuroraSqlServerInstanceGroup('aurora_sql_server_instance', 'Aurora Sql Server Instance', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

