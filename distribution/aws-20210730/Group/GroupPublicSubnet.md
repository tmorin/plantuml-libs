# GroupPublicSubnet


```text
aws-20210730/Group/GroupPublicSubnet
```

```text
include('aws-20210730/Group/GroupPublicSubnet')
```



| Illustration | GroupPublicSubnet |
| :---: | :---: |
| ![illustration for Illustration](../../aws-20210730/Resource/GroupIcons/VpcSubnetPublic.png) | ![illustration for GroupPublicSubnet](../../aws-20210730/Group/GroupPublicSubnet.Local.png) |




## GroupPublicSubnet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element GroupPublicSubnet
include('aws-20210730/Group/GroupPublicSubnet')

GroupPublicSubnet('GroupPublicSubnet', 'Group Public Subnet', 'an optional tech label') {
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element GroupPublicSubnet
include('aws-20210730/Group/GroupPublicSubnet')

GroupPublicSubnet('GroupPublicSubnet', 'Group Public Subnet', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

