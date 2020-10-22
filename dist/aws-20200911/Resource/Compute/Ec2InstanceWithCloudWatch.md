# Ec2 Instance With Cloud Watch

```text
aws-20200911/Resource/Compute/Ec2InstanceWithCloudWatch
```

```text
include('aws-20200911/Resource/Compute/Ec2InstanceWithCloudWatch')
```

|icon|card|element|group|
|---|---|---|---|
|![](Ec2InstanceWithCloudWatch.png)|![](Ec2InstanceWithCloudWatch.card.png)|![](Ec2InstanceWithCloudWatch.element.png)|![](Ec2InstanceWithCloudWatch.group.png)|



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
' loads the Ec2InstanceWithCloudWatch element
include('aws-20200911/Resource/Compute/Ec2InstanceWithCloudWatch')
Ec2InstanceWithCloudWatchCard('ec_2_instance_with_cloud_watch', 'Ec2 Instance With Cloud Watch', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Ec2InstanceWithCloudWatch element
include('aws-20200911/Resource/Compute/Ec2InstanceWithCloudWatch')
Ec2InstanceWithCloudWatchCard('ec_2_instance_with_cloud_watch', 'Ec2 Instance With Cloud Watch', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Ec2InstanceWithCloudWatch element
include('aws-20200911/Resource/Compute/Ec2InstanceWithCloudWatch')
Ec2InstanceWithCloudWatch('ec_2_instance_with_cloud_watch', 'Ec2 Instance With Cloud Watch', 'an optional tech field')
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
' loads the Ec2InstanceWithCloudWatch element
include('aws-20200911/Resource/Compute/Ec2InstanceWithCloudWatch')
Ec2InstanceWithCloudWatch('ec_2_instance_with_cloud_watch', 'Ec2 Instance With Cloud Watch', 'an optional tech field')
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
' loads the Ec2InstanceWithCloudWatch element
include('aws-20200911/Resource/Compute/Ec2InstanceWithCloudWatch')
Ec2InstanceWithCloudWatchGroup('ec_2_instance_with_cloud_watch', 'Ec2 Instance With Cloud Watch', 'an optional tech field'){
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
' loads the Ec2InstanceWithCloudWatch element
include('aws-20200911/Resource/Compute/Ec2InstanceWithCloudWatch')
Ec2InstanceWithCloudWatchGroup('ec_2_instance_with_cloud_watch', 'Ec2 Instance With Cloud Watch', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

