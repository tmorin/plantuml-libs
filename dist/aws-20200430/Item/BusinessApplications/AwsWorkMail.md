# Aws Work Mail

```text
aws-20200430/Item/BusinessApplications/AwsWorkMail
```

```text
include('aws-20200430/Item/BusinessApplications/AwsWorkMail')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsWorkMail.png)|![](AwsWorkMail.card.png)|![](AwsWorkMail.element.png)|![](AwsWorkMail.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsWorkMail element
include('aws-20200430/Item/BusinessApplications/AwsWorkMail')
AwsWorkMailCard('aws_work_mail', 'Aws Work Mail', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsWorkMail element
include('aws-20200430/Item/BusinessApplications/AwsWorkMail')
AwsWorkMailCard('aws_work_mail', 'Aws Work Mail', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsWorkMail element
include('aws-20200430/Item/BusinessApplications/AwsWorkMail')
AwsWorkMail('aws_work_mail', 'Aws Work Mail', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsWorkMail element
include('aws-20200430/Item/BusinessApplications/AwsWorkMail')
AwsWorkMail('aws_work_mail', 'Aws Work Mail', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsWorkMail element
include('aws-20200430/Item/BusinessApplications/AwsWorkMail')
AwsWorkMailGroup('aws_work_mail', 'Aws Work Mail', 'an optional tech field'){
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsWorkMail element
include('aws-20200430/Item/BusinessApplications/AwsWorkMail')
AwsWorkMailGroup('aws_work_mail', 'Aws Work Mail', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

