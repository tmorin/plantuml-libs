# Amazon Work Mail

```text
aws-20210131/Architecture/BusinessApplication/AmazonWorkMail
```

```text
include('aws-20210131/Architecture/BusinessApplication/AmazonWorkMail')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonWorkMail.png)|![](AmazonWorkMail.card.png)|![](AmazonWorkMail.element.png)|![](AmazonWorkMail.group.png)|



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
' loads the AmazonWorkMail element
include('aws-20210131/Architecture/BusinessApplication/AmazonWorkMail')
AmazonWorkMailCard('amazon_work_mail', 'Amazon Work Mail', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonWorkMail element
include('aws-20210131/Architecture/BusinessApplication/AmazonWorkMail')
AmazonWorkMailCard('amazon_work_mail', 'Amazon Work Mail', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonWorkMail element
include('aws-20210131/Architecture/BusinessApplication/AmazonWorkMail')
AmazonWorkMail('amazon_work_mail', 'Amazon Work Mail', 'an optional tech field')
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
' loads the AmazonWorkMail element
include('aws-20210131/Architecture/BusinessApplication/AmazonWorkMail')
AmazonWorkMail('amazon_work_mail', 'Amazon Work Mail', 'an optional tech field')
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
' loads the AmazonWorkMail element
include('aws-20210131/Architecture/BusinessApplication/AmazonWorkMail')
AmazonWorkMailGroup('amazon_work_mail', 'Amazon Work Mail', 'an optional tech field'){
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
' loads the AmazonWorkMail element
include('aws-20210131/Architecture/BusinessApplication/AmazonWorkMail')
AmazonWorkMailGroup('amazon_work_mail', 'Amazon Work Mail', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

