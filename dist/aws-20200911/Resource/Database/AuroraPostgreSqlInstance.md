# Aurora Postgre Sql Instance

```text
aws-20200911/Resource/Database/AuroraPostgreSqlInstance
```

```text
include('aws-20200911/Resource/Database/AuroraPostgreSqlInstance')
```

|icon|card|element|group|
|---|---|---|---|
|![](AuroraPostgreSqlInstance.png)|![](AuroraPostgreSqlInstance.card.png)|![](AuroraPostgreSqlInstance.element.png)|![](AuroraPostgreSqlInstance.group.png)|



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
' loads the AuroraPostgreSqlInstance element
include('aws-20200911/Resource/Database/AuroraPostgreSqlInstance')
AuroraPostgreSqlInstanceCard('aurora_postgre_sql_instance', 'Aurora Postgre Sql Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AuroraPostgreSqlInstance element
include('aws-20200911/Resource/Database/AuroraPostgreSqlInstance')
AuroraPostgreSqlInstanceCard('aurora_postgre_sql_instance', 'Aurora Postgre Sql Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AuroraPostgreSqlInstance element
include('aws-20200911/Resource/Database/AuroraPostgreSqlInstance')
AuroraPostgreSqlInstance('aurora_postgre_sql_instance', 'Aurora Postgre Sql Instance', 'an optional tech field')
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
' loads the AuroraPostgreSqlInstance element
include('aws-20200911/Resource/Database/AuroraPostgreSqlInstance')
AuroraPostgreSqlInstance('aurora_postgre_sql_instance', 'Aurora Postgre Sql Instance', 'an optional tech field')
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
' loads the AuroraPostgreSqlInstance element
include('aws-20200911/Resource/Database/AuroraPostgreSqlInstance')
AuroraPostgreSqlInstanceGroup('aurora_postgre_sql_instance', 'Aurora Postgre Sql Instance', 'an optional tech field'){
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
' loads the AuroraPostgreSqlInstance element
include('aws-20200911/Resource/Database/AuroraPostgreSqlInstance')
AuroraPostgreSqlInstanceGroup('aurora_postgre_sql_instance', 'Aurora Postgre Sql Instance', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

