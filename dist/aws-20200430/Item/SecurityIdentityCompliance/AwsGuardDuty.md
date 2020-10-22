# Aws Guard Duty

```text
aws-20200430/Item/SecurityIdentityCompliance/AwsGuardDuty
```

```text
include('aws-20200430/Item/SecurityIdentityCompliance/AwsGuardDuty')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsGuardDuty.png)|![](AwsGuardDuty.card.png)|![](AwsGuardDuty.element.png)|![](AwsGuardDuty.group.png)|



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
' loads the AwsGuardDuty element
include('aws-20200430/Item/SecurityIdentityCompliance/AwsGuardDuty')
AwsGuardDutyCard('aws_guard_duty', 'Aws Guard Duty', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsGuardDuty element
include('aws-20200430/Item/SecurityIdentityCompliance/AwsGuardDuty')
AwsGuardDutyCard('aws_guard_duty', 'Aws Guard Duty', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsGuardDuty element
include('aws-20200430/Item/SecurityIdentityCompliance/AwsGuardDuty')
AwsGuardDuty('aws_guard_duty', 'Aws Guard Duty', 'an optional tech field')
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
' loads the AwsGuardDuty element
include('aws-20200430/Item/SecurityIdentityCompliance/AwsGuardDuty')
AwsGuardDuty('aws_guard_duty', 'Aws Guard Duty', 'an optional tech field')
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
' loads the AwsGuardDuty element
include('aws-20200430/Item/SecurityIdentityCompliance/AwsGuardDuty')
AwsGuardDutyGroup('aws_guard_duty', 'Aws Guard Duty', 'an optional tech field'){
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
' loads the AwsGuardDuty element
include('aws-20200430/Item/SecurityIdentityCompliance/AwsGuardDuty')
AwsGuardDutyGroup('aws_guard_duty', 'Aws Guard Duty', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

