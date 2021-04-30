# Amazon Guard Duty

```text
aws-20210131/Architecture/SecurityIdentityCompliance/AmazonGuardDuty
```

```text
include('aws-20210131/Architecture/SecurityIdentityCompliance/AmazonGuardDuty')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonGuardDuty.png)|![](AmazonGuardDuty.card.png)|![](AmazonGuardDuty.element.png)|![](AmazonGuardDuty.group.png)|



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
' loads the AmazonGuardDuty element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AmazonGuardDuty')
AmazonGuardDutyCard('amazon_guard_duty', 'Amazon Guard Duty', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonGuardDuty element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AmazonGuardDuty')
AmazonGuardDutyCard('amazon_guard_duty', 'Amazon Guard Duty', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonGuardDuty element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AmazonGuardDuty')
AmazonGuardDuty('amazon_guard_duty', 'Amazon Guard Duty', 'an optional tech field')
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
' loads the AmazonGuardDuty element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AmazonGuardDuty')
AmazonGuardDuty('amazon_guard_duty', 'Amazon Guard Duty', 'an optional tech field')
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
' loads the AmazonGuardDuty element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AmazonGuardDuty')
AmazonGuardDutyGroup('amazon_guard_duty', 'Amazon Guard Duty', 'an optional tech field'){
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
' loads the AmazonGuardDuty element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AmazonGuardDuty')
AmazonGuardDutyGroup('amazon_guard_duty', 'Amazon Guard Duty', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

