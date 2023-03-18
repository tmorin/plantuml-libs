# GroupPrivateSubnet


```text
aws-q1-2023/Group/GroupPrivateSubnet
```

```text
include('aws-q1-2023/Group/GroupPrivateSubnet')
```



| Illustration | GroupPrivateSubnet |
| :---: | :---: |
| ![illustration for Illustration](../../aws-q1-2023/Resource/GroupIcons/VpcSubnetPrivate.png) | ![illustration for GroupPrivateSubnet](../../aws-q1-2023/Group/GroupPrivateSubnet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GroupPrivateSubnetXs>`
- `<$GroupPrivateSubnetSm>`
- `<$GroupPrivateSubnetMd>`
- `<$GroupPrivateSubnetLg>`





## GroupPrivateSubnet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element GroupPrivateSubnet
include('aws-q1-2023/Group/GroupPrivateSubnet')

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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element GroupPrivateSubnet
include('aws-q1-2023/Group/GroupPrivateSubnet')

GroupPrivateSubnet('GroupPrivateSubnet', 'Group Private Subnet', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

