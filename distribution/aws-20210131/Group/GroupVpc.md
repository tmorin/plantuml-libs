# GroupVpc


```text
aws-20210131/Group/GroupVpc
```

```text
include('aws-20210131/Group/GroupVpc')
```



| Illustration | GroupVpc |
| :---: | :---: |
| ![illustration for Illustration](../../aws-20210131/Resource/GroupIcons/Vpc.png) | ![illustration for GroupVpc](../../aws-20210131/Group/GroupVpc.Local.png) |




## GroupVpc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element GroupVpc
include('aws-20210131/Group/GroupVpc')

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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element GroupVpc
include('aws-20210131/Group/GroupVpc')

GroupVpc('GroupVpc', 'Group Vpc', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

