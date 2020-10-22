# Simple Email Service Email

```text
aws-20200911/Resource/CustomerEngagement/SimpleEmailServiceEmail
```

```text
include('aws-20200911/Resource/CustomerEngagement/SimpleEmailServiceEmail')
```

|icon|card|element|group|
|---|---|---|---|
|![](SimpleEmailServiceEmail.png)|![](SimpleEmailServiceEmail.card.png)|![](SimpleEmailServiceEmail.element.png)|![](SimpleEmailServiceEmail.group.png)|



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
' loads the SimpleEmailServiceEmail element
include('aws-20200911/Resource/CustomerEngagement/SimpleEmailServiceEmail')
SimpleEmailServiceEmailCard('simple_email_service_email', 'Simple Email Service Email', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the SimpleEmailServiceEmail element
include('aws-20200911/Resource/CustomerEngagement/SimpleEmailServiceEmail')
SimpleEmailServiceEmailCard('simple_email_service_email', 'Simple Email Service Email', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the SimpleEmailServiceEmail element
include('aws-20200911/Resource/CustomerEngagement/SimpleEmailServiceEmail')
SimpleEmailServiceEmail('simple_email_service_email', 'Simple Email Service Email', 'an optional tech field')
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
' loads the SimpleEmailServiceEmail element
include('aws-20200911/Resource/CustomerEngagement/SimpleEmailServiceEmail')
SimpleEmailServiceEmail('simple_email_service_email', 'Simple Email Service Email', 'an optional tech field')
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
' loads the SimpleEmailServiceEmail element
include('aws-20200911/Resource/CustomerEngagement/SimpleEmailServiceEmail')
SimpleEmailServiceEmailGroup('simple_email_service_email', 'Simple Email Service Email', 'an optional tech field'){
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
' loads the SimpleEmailServiceEmail element
include('aws-20200911/Resource/CustomerEngagement/SimpleEmailServiceEmail')
SimpleEmailServiceEmailGroup('simple_email_service_email', 'Simple Email Service Email', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

