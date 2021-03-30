# Amazon Rds Proxy

```text
aws-20210131/Resource/Database/AmazonRdsProxy
```

```text
include('aws-20210131/Resource/Database/AmazonRdsProxy')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonRdsProxy.png)|![](AmazonRdsProxy.card.png)|![](AmazonRdsProxy.element.png)|![](AmazonRdsProxy.group.png)|



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
' loads the AmazonRdsProxy element
include('aws-20210131/Resource/Database/AmazonRdsProxy')
AmazonRdsProxyCard('amazon_rds_proxy', 'Amazon Rds Proxy', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonRdsProxy element
include('aws-20210131/Resource/Database/AmazonRdsProxy')
AmazonRdsProxyCard('amazon_rds_proxy', 'Amazon Rds Proxy', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonRdsProxy element
include('aws-20210131/Resource/Database/AmazonRdsProxy')
AmazonRdsProxy('amazon_rds_proxy', 'Amazon Rds Proxy', 'an optional tech field')
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
' loads the AmazonRdsProxy element
include('aws-20210131/Resource/Database/AmazonRdsProxy')
AmazonRdsProxy('amazon_rds_proxy', 'Amazon Rds Proxy', 'an optional tech field')
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
' loads the AmazonRdsProxy element
include('aws-20210131/Resource/Database/AmazonRdsProxy')
AmazonRdsProxyGroup('amazon_rds_proxy', 'Amazon Rds Proxy', 'an optional tech field'){
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
' loads the AmazonRdsProxy element
include('aws-20210131/Resource/Database/AmazonRdsProxy')
AmazonRdsProxyGroup('amazon_rds_proxy', 'Amazon Rds Proxy', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

