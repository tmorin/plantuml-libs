# Aurora My Sql Instance

```text
aws-20200911/Resource/Database/AuroraMySqlInstance
```

```text
include('aws-20200911/Resource/Database/AuroraMySqlInstance')
```

|icon|card|element|group|
|---|---|---|---|
|![](AuroraMySqlInstance.png)|![](AuroraMySqlInstance.card.png)|![](AuroraMySqlInstance.element.png)|![](AuroraMySqlInstance.group.png)|



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
' loads the AuroraMySqlInstance element
include('aws-20200911/Resource/Database/AuroraMySqlInstance')
AuroraMySqlInstanceCard('aurora_my_sql_instance', 'Aurora My Sql Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AuroraMySqlInstance element
include('aws-20200911/Resource/Database/AuroraMySqlInstance')
AuroraMySqlInstanceCard('aurora_my_sql_instance', 'Aurora My Sql Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AuroraMySqlInstance element
include('aws-20200911/Resource/Database/AuroraMySqlInstance')
AuroraMySqlInstance('aurora_my_sql_instance', 'Aurora My Sql Instance', 'an optional tech field')
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
' loads the AuroraMySqlInstance element
include('aws-20200911/Resource/Database/AuroraMySqlInstance')
AuroraMySqlInstance('aurora_my_sql_instance', 'Aurora My Sql Instance', 'an optional tech field')
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
' loads the AuroraMySqlInstance element
include('aws-20200911/Resource/Database/AuroraMySqlInstance')
AuroraMySqlInstanceGroup('aurora_my_sql_instance', 'Aurora My Sql Instance', 'an optional tech field'){
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
' loads the AuroraMySqlInstance element
include('aws-20200911/Resource/Database/AuroraMySqlInstance')
AuroraMySqlInstanceGroup('aurora_my_sql_instance', 'Aurora My Sql Instance', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

