# GroupCloud


```text
aws-20210131/Group/GroupCloud
```

```text
include('aws-20210131/Group/GroupCloud')
```



| Illustration | GroupCloud |
| :---: | :---: |
| ![illustration for Illustration](../../aws-20210131/Resource/GroupIcons/Cloud.png) | ![illustration for GroupCloud](../../aws-20210131/Group/GroupCloud.Local.png) |




## GroupCloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element GroupCloud
include('aws-20210131/Group/GroupCloud')

GroupCloud('GroupCloud', 'Group Cloud', 'an optional tech label') {
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

' loads the Item which embeds the element GroupCloud
include('aws-20210131/Group/GroupCloud')

GroupCloud('GroupCloud', 'Group Cloud', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

