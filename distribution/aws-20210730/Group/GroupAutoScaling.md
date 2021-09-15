# GroupAutoScaling


```text
aws-20210730/Group/GroupAutoScaling
```

```text
include('aws-20210730/Group/GroupAutoScaling')
```



| Illustration | GroupAutoScaling |
| :---: | :---: |
| ![illustration for Illustration](../../aws-20210730/Resource/GroupIcons/AutoScaling.png) | ![illustration for GroupAutoScaling](../../aws-20210730/Group/GroupAutoScaling.Local.png) |




## GroupAutoScaling

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element GroupAutoScaling
include('aws-20210730/Group/GroupAutoScaling')

GroupAutoScaling('GroupAutoScaling', 'Group Auto Scaling', 'an optional tech label') {
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

' loads the Item which embeds the element GroupAutoScaling
include('aws-20210730/Group/GroupAutoScaling')

GroupAutoScaling('GroupAutoScaling', 'Group Auto Scaling', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

