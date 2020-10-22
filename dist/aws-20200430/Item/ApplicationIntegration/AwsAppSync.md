# Aws App Sync

```text
aws-20200430/Item/ApplicationIntegration/AwsAppSync
```

```text
include('aws-20200430/Item/ApplicationIntegration/AwsAppSync')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsAppSync.png)|![](AwsAppSync.card.png)|![](AwsAppSync.element.png)|![](AwsAppSync.group.png)|



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
' loads the AwsAppSync element
include('aws-20200430/Item/ApplicationIntegration/AwsAppSync')
AwsAppSyncCard('aws_app_sync', 'Aws App Sync', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsAppSync element
include('aws-20200430/Item/ApplicationIntegration/AwsAppSync')
AwsAppSyncCard('aws_app_sync', 'Aws App Sync', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsAppSync element
include('aws-20200430/Item/ApplicationIntegration/AwsAppSync')
AwsAppSync('aws_app_sync', 'Aws App Sync', 'an optional tech field')
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
' loads the AwsAppSync element
include('aws-20200430/Item/ApplicationIntegration/AwsAppSync')
AwsAppSync('aws_app_sync', 'Aws App Sync', 'an optional tech field')
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
' loads the AwsAppSync element
include('aws-20200430/Item/ApplicationIntegration/AwsAppSync')
AwsAppSyncGroup('aws_app_sync', 'Aws App Sync', 'an optional tech field'){
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
' loads the AwsAppSync element
include('aws-20200430/Item/ApplicationIntegration/AwsAppSync')
AwsAppSyncGroup('aws_app_sync', 'Aws App Sync', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

