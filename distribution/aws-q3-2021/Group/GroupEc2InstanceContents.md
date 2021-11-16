# GroupEc2InstanceContents


```text
aws-q3-2021/Group/GroupEc2InstanceContents
```

```text
include('aws-q3-2021/Group/GroupEc2InstanceContents')
```



| Illustration | GroupEc2InstanceContents |
| :---: | :---: |
| ![illustration for Illustration](../../aws-q3-2021/Resource/GroupIcons/Ec2InstanceContainer.png) | ![illustration for GroupEc2InstanceContents](../../aws-q3-2021/Group/GroupEc2InstanceContents.Local.png) |




## GroupEc2InstanceContents

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element GroupEc2InstanceContents
include('aws-q3-2021/Group/GroupEc2InstanceContents')

GroupEc2InstanceContents('GroupEc2InstanceContents', 'Group Ec2 Instance Contents', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element GroupEc2InstanceContents
include('aws-q3-2021/Group/GroupEc2InstanceContents')

GroupEc2InstanceContents('GroupEc2InstanceContents', 'Group Ec2 Instance Contents', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

