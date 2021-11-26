# GroupPrivateSubnet


```text
aws-q3-2021/Group/GroupPrivateSubnet
```

```text
include('aws-q3-2021/Group/GroupPrivateSubnet')
```



| Illustration | GroupPrivateSubnet |
| :---: | :---: |
| ![illustration for Illustration](../../aws-q3-2021/Resource/GroupIcons/VpcSubnetPrivate.png) | ![illustration for GroupPrivateSubnet](../../aws-q3-2021/Group/GroupPrivateSubnet.Local.png) |




## GroupPrivateSubnet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element GroupPrivateSubnet
include('aws-q3-2021/Group/GroupPrivateSubnet')

GroupPrivateSubnet('GroupPrivateSubnet', 'Group Private Subnet', 'an optional tech label') {
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

' loads the Item which embeds the element GroupPrivateSubnet
include('aws-q3-2021/Group/GroupPrivateSubnet')

GroupPrivateSubnet('GroupPrivateSubnet', 'Group Private Subnet', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

