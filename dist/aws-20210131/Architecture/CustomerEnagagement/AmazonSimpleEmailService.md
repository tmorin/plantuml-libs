# Amazon Simple Email Service

```text
aws-20210131/Architecture/CustomerEnagagement/AmazonSimpleEmailService
```

```text
include('aws-20210131/Architecture/CustomerEnagagement/AmazonSimpleEmailService')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonSimpleEmailService.png)|![](AmazonSimpleEmailService.card.png)|![](AmazonSimpleEmailService.element.png)|![](AmazonSimpleEmailService.group.png)|



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
' loads the AmazonSimpleEmailService element
include('aws-20210131/Architecture/CustomerEnagagement/AmazonSimpleEmailService')
AmazonSimpleEmailServiceCard('amazon_simple_email_service', 'Amazon Simple Email Service', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonSimpleEmailService element
include('aws-20210131/Architecture/CustomerEnagagement/AmazonSimpleEmailService')
AmazonSimpleEmailServiceCard('amazon_simple_email_service', 'Amazon Simple Email Service', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonSimpleEmailService element
include('aws-20210131/Architecture/CustomerEnagagement/AmazonSimpleEmailService')
AmazonSimpleEmailService('amazon_simple_email_service', 'Amazon Simple Email Service', 'an optional tech field')
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
' loads the AmazonSimpleEmailService element
include('aws-20210131/Architecture/CustomerEnagagement/AmazonSimpleEmailService')
AmazonSimpleEmailService('amazon_simple_email_service', 'Amazon Simple Email Service', 'an optional tech field')
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
' loads the AmazonSimpleEmailService element
include('aws-20210131/Architecture/CustomerEnagagement/AmazonSimpleEmailService')
AmazonSimpleEmailServiceGroup('amazon_simple_email_service', 'Amazon Simple Email Service', 'an optional tech field'){
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
' loads the AmazonSimpleEmailService element
include('aws-20210131/Architecture/CustomerEnagagement/AmazonSimpleEmailService')
AmazonSimpleEmailServiceGroup('amazon_simple_email_service', 'Amazon Simple Email Service', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

