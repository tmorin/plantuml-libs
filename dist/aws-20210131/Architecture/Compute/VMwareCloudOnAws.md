# V Mware Cloud On Aws

```text
aws-20210131/Architecture/Compute/VMwareCloudOnAws
```

```text
include('aws-20210131/Architecture/Compute/VMwareCloudOnAws')
```

|icon|card|element|group|
|---|---|---|---|
|![](VMwareCloudOnAws.png)|![](VMwareCloudOnAws.card.png)|![](VMwareCloudOnAws.element.png)|![](VMwareCloudOnAws.group.png)|



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
' loads the VMwareCloudOnAws element
include('aws-20210131/Architecture/Compute/VMwareCloudOnAws')
VMwareCloudOnAwsCard('v_mware_cloud_on_aws', 'V Mware Cloud On Aws', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the VMwareCloudOnAws element
include('aws-20210131/Architecture/Compute/VMwareCloudOnAws')
VMwareCloudOnAwsCard('v_mware_cloud_on_aws', 'V Mware Cloud On Aws', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the VMwareCloudOnAws element
include('aws-20210131/Architecture/Compute/VMwareCloudOnAws')
VMwareCloudOnAws('v_mware_cloud_on_aws', 'V Mware Cloud On Aws', 'an optional tech field')
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
' loads the VMwareCloudOnAws element
include('aws-20210131/Architecture/Compute/VMwareCloudOnAws')
VMwareCloudOnAws('v_mware_cloud_on_aws', 'V Mware Cloud On Aws', 'an optional tech field')
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
' loads the VMwareCloudOnAws element
include('aws-20210131/Architecture/Compute/VMwareCloudOnAws')
VMwareCloudOnAwsGroup('v_mware_cloud_on_aws', 'V Mware Cloud On Aws', 'an optional tech field'){
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
' loads the VMwareCloudOnAws element
include('aws-20210131/Architecture/Compute/VMwareCloudOnAws')
VMwareCloudOnAwsGroup('v_mware_cloud_on_aws', 'V Mware Cloud On Aws', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

