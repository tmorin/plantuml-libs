# Amazon Route53

```text
aws-20210131/Architecture/NetworkingContent/AmazonRoute53
```

```text
include('aws-20210131/Architecture/NetworkingContent/AmazonRoute53')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonRoute53.png)|![](AmazonRoute53.card.png)|![](AmazonRoute53.element.png)|![](AmazonRoute53.group.png)|



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
' loads the AmazonRoute53 element
include('aws-20210131/Architecture/NetworkingContent/AmazonRoute53')
AmazonRoute53Card('amazon_route_53', 'Amazon Route53', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonRoute53 element
include('aws-20210131/Architecture/NetworkingContent/AmazonRoute53')
AmazonRoute53Card('amazon_route_53', 'Amazon Route53', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonRoute53 element
include('aws-20210131/Architecture/NetworkingContent/AmazonRoute53')
AmazonRoute53('amazon_route_53', 'Amazon Route53', 'an optional tech field')
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
' loads the AmazonRoute53 element
include('aws-20210131/Architecture/NetworkingContent/AmazonRoute53')
AmazonRoute53('amazon_route_53', 'Amazon Route53', 'an optional tech field')
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
' loads the AmazonRoute53 element
include('aws-20210131/Architecture/NetworkingContent/AmazonRoute53')
AmazonRoute53Group('amazon_route_53', 'Amazon Route53', 'an optional tech field'){
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
' loads the AmazonRoute53 element
include('aws-20210131/Architecture/NetworkingContent/AmazonRoute53')
AmazonRoute53Group('amazon_route_53', 'Amazon Route53', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

