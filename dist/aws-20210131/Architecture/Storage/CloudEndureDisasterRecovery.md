# Cloud Endure Disaster Recovery

```text
aws-20210131/Architecture/Storage/CloudEndureDisasterRecovery
```

```text
include('aws-20210131/Architecture/Storage/CloudEndureDisasterRecovery')
```

|icon|card|element|group|
|---|---|---|---|
|![](CloudEndureDisasterRecovery.png)|![](CloudEndureDisasterRecovery.card.png)|![](CloudEndureDisasterRecovery.element.png)|![](CloudEndureDisasterRecovery.group.png)|



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
' loads the CloudEndureDisasterRecovery element
include('aws-20210131/Architecture/Storage/CloudEndureDisasterRecovery')
CloudEndureDisasterRecoveryCard('cloud_endure_disaster_recovery', 'Cloud Endure Disaster Recovery', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudEndureDisasterRecovery element
include('aws-20210131/Architecture/Storage/CloudEndureDisasterRecovery')
CloudEndureDisasterRecoveryCard('cloud_endure_disaster_recovery', 'Cloud Endure Disaster Recovery', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudEndureDisasterRecovery element
include('aws-20210131/Architecture/Storage/CloudEndureDisasterRecovery')
CloudEndureDisasterRecovery('cloud_endure_disaster_recovery', 'Cloud Endure Disaster Recovery', 'an optional tech field')
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
' loads the CloudEndureDisasterRecovery element
include('aws-20210131/Architecture/Storage/CloudEndureDisasterRecovery')
CloudEndureDisasterRecovery('cloud_endure_disaster_recovery', 'Cloud Endure Disaster Recovery', 'an optional tech field')
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
' loads the CloudEndureDisasterRecovery element
include('aws-20210131/Architecture/Storage/CloudEndureDisasterRecovery')
CloudEndureDisasterRecoveryGroup('cloud_endure_disaster_recovery', 'Cloud Endure Disaster Recovery', 'an optional tech field'){
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
' loads the CloudEndureDisasterRecovery element
include('aws-20210131/Architecture/Storage/CloudEndureDisasterRecovery')
CloudEndureDisasterRecoveryGroup('cloud_endure_disaster_recovery', 'Cloud Endure Disaster Recovery', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

