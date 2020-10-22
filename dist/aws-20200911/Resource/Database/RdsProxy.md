# Rds Proxy

```text
aws-20200911/Resource/Database/RdsProxy
```

```text
include('aws-20200911/Resource/Database/RdsProxy')
```

|icon|card|element|group|
|---|---|---|---|
|![](RdsProxy.png)|![](RdsProxy.card.png)|![](RdsProxy.element.png)|![](RdsProxy.group.png)|



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
' loads the RdsProxy element
include('aws-20200911/Resource/Database/RdsProxy')
RdsProxyCard('rds_proxy', 'Rds Proxy', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the RdsProxy element
include('aws-20200911/Resource/Database/RdsProxy')
RdsProxyCard('rds_proxy', 'Rds Proxy', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the RdsProxy element
include('aws-20200911/Resource/Database/RdsProxy')
RdsProxy('rds_proxy', 'Rds Proxy', 'an optional tech field')
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
' loads the RdsProxy element
include('aws-20200911/Resource/Database/RdsProxy')
RdsProxy('rds_proxy', 'Rds Proxy', 'an optional tech field')
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
' loads the RdsProxy element
include('aws-20200911/Resource/Database/RdsProxy')
RdsProxyGroup('rds_proxy', 'Rds Proxy', 'an optional tech field'){
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
' loads the RdsProxy element
include('aws-20200911/Resource/Database/RdsProxy')
RdsProxyGroup('rds_proxy', 'Rds Proxy', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

