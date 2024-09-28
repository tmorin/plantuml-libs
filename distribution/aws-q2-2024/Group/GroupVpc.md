# GroupVpc


```text
aws-q2-2024/Group/GroupVpc
```

```text
include('aws-q2-2024/Group/GroupVpc')
```



| Illustration | GroupVpc |
| :---: | :---: |
| ![illustration for Illustration](../../aws-q2-2024/Resource/GroupIcons/VirtualPrivateCloudVpc.png) | ![illustration for GroupVpc](../../aws-q2-2024/Group/GroupVpc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GroupVpcXs>`
- `<$GroupVpcSm>`
- `<$GroupVpcMd>`
- `<$GroupVpcLg>`





## GroupVpc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element GroupVpc
include('aws-q2-2024/Group/GroupVpc')

GroupVpc('GroupVpc', 'Group Vpc', 'an optional tech label') {
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element GroupVpc
include('aws-q2-2024/Group/GroupVpc')

GroupVpc('GroupVpc', 'Group Vpc', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

