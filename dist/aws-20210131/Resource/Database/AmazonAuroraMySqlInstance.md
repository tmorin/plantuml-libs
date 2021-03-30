# Amazon Aurora My Sql Instance

```text
aws-20210131/Resource/Database/AmazonAuroraMySqlInstance
```

```text
include('aws-20210131/Resource/Database/AmazonAuroraMySqlInstance')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonAuroraMySqlInstance.png)|![](AmazonAuroraMySqlInstance.card.png)|![](AmazonAuroraMySqlInstance.element.png)|![](AmazonAuroraMySqlInstance.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonAuroraMySqlInstance element
include('aws-20210131/Resource/Database/AmazonAuroraMySqlInstance')
AmazonAuroraMySqlInstanceCard('amazon_aurora_my_sql_instance', 'Amazon Aurora My Sql Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonAuroraMySqlInstance element
include('aws-20210131/Resource/Database/AmazonAuroraMySqlInstance')
AmazonAuroraMySqlInstanceCard('amazon_aurora_my_sql_instance', 'Amazon Aurora My Sql Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonAuroraMySqlInstance element
include('aws-20210131/Resource/Database/AmazonAuroraMySqlInstance')
AmazonAuroraMySqlInstance('amazon_aurora_my_sql_instance', 'Amazon Aurora My Sql Instance', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonAuroraMySqlInstance element
include('aws-20210131/Resource/Database/AmazonAuroraMySqlInstance')
AmazonAuroraMySqlInstance('amazon_aurora_my_sql_instance', 'Amazon Aurora My Sql Instance', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonAuroraMySqlInstance element
include('aws-20210131/Resource/Database/AmazonAuroraMySqlInstance')
AmazonAuroraMySqlInstanceGroup('amazon_aurora_my_sql_instance', 'Amazon Aurora My Sql Instance', 'an optional tech field'){
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonAuroraMySqlInstance element
include('aws-20210131/Resource/Database/AmazonAuroraMySqlInstance')
AmazonAuroraMySqlInstanceGroup('amazon_aurora_my_sql_instance', 'Amazon Aurora My Sql Instance', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

