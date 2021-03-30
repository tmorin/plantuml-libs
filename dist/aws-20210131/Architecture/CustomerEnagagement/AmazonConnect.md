# Amazon Connect

```text
aws-20210131/Architecture/CustomerEnagagement/AmazonConnect
```

```text
include('aws-20210131/Architecture/CustomerEnagagement/AmazonConnect')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonConnect.png)|![](AmazonConnect.card.png)|![](AmazonConnect.element.png)|![](AmazonConnect.group.png)|



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
' loads the AmazonConnect element
include('aws-20210131/Architecture/CustomerEnagagement/AmazonConnect')
AmazonConnectCard('amazon_connect', 'Amazon Connect', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonConnect element
include('aws-20210131/Architecture/CustomerEnagagement/AmazonConnect')
AmazonConnectCard('amazon_connect', 'Amazon Connect', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonConnect element
include('aws-20210131/Architecture/CustomerEnagagement/AmazonConnect')
AmazonConnect('amazon_connect', 'Amazon Connect', 'an optional tech field')
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
' loads the AmazonConnect element
include('aws-20210131/Architecture/CustomerEnagagement/AmazonConnect')
AmazonConnect('amazon_connect', 'Amazon Connect', 'an optional tech field')
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
' loads the AmazonConnect element
include('aws-20210131/Architecture/CustomerEnagagement/AmazonConnect')
AmazonConnectGroup('amazon_connect', 'Amazon Connect', 'an optional tech field'){
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
' loads the AmazonConnect element
include('aws-20210131/Architecture/CustomerEnagagement/AmazonConnect')
AmazonConnectGroup('amazon_connect', 'Amazon Connect', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

