# Rds Proxy Alternate

```text
aws-20200911/Resource/Database/RdsProxyAlternate
```

```text
include('aws-20200911/Resource/Database/RdsProxyAlternate')
```

|icon|card|element|group|
|---|---|---|---|
|![](RdsProxyAlternate.png)|![](RdsProxyAlternate.card.png)|![](RdsProxyAlternate.element.png)|![](RdsProxyAlternate.group.png)|



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
' loads the RdsProxyAlternate element
include('aws-20200911/Resource/Database/RdsProxyAlternate')
RdsProxyAlternateCard('rds_proxy_alternate', 'Rds Proxy Alternate', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the RdsProxyAlternate element
include('aws-20200911/Resource/Database/RdsProxyAlternate')
RdsProxyAlternateCard('rds_proxy_alternate', 'Rds Proxy Alternate', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the RdsProxyAlternate element
include('aws-20200911/Resource/Database/RdsProxyAlternate')
RdsProxyAlternate('rds_proxy_alternate', 'Rds Proxy Alternate', 'an optional tech field')
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
' loads the RdsProxyAlternate element
include('aws-20200911/Resource/Database/RdsProxyAlternate')
RdsProxyAlternate('rds_proxy_alternate', 'Rds Proxy Alternate', 'an optional tech field')
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
' loads the RdsProxyAlternate element
include('aws-20200911/Resource/Database/RdsProxyAlternate')
RdsProxyAlternateGroup('rds_proxy_alternate', 'Rds Proxy Alternate', 'an optional tech field'){
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
' loads the RdsProxyAlternate element
include('aws-20200911/Resource/Database/RdsProxyAlternate')
RdsProxyAlternateGroup('rds_proxy_alternate', 'Rds Proxy Alternate', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

