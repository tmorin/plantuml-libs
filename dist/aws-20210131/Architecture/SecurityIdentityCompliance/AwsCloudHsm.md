# Aws Cloud Hsm

```text
aws-20210131/Architecture/SecurityIdentityCompliance/AwsCloudHsm
```

```text
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsCloudHsm')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsCloudHsm.png)|![](AwsCloudHsm.card.png)|![](AwsCloudHsm.element.png)|![](AwsCloudHsm.group.png)|



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
' loads the AwsCloudHsm element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsCloudHsm')
AwsCloudHsmCard('aws_cloud_hsm', 'Aws Cloud Hsm', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsCloudHsm element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsCloudHsm')
AwsCloudHsmCard('aws_cloud_hsm', 'Aws Cloud Hsm', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsCloudHsm element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsCloudHsm')
AwsCloudHsm('aws_cloud_hsm', 'Aws Cloud Hsm', 'an optional tech field')
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
' loads the AwsCloudHsm element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsCloudHsm')
AwsCloudHsm('aws_cloud_hsm', 'Aws Cloud Hsm', 'an optional tech field')
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
' loads the AwsCloudHsm element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsCloudHsm')
AwsCloudHsmGroup('aws_cloud_hsm', 'Aws Cloud Hsm', 'an optional tech field'){
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
' loads the AwsCloudHsm element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsCloudHsm')
AwsCloudHsmGroup('aws_cloud_hsm', 'Aws Cloud Hsm', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

