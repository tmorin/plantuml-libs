# GroupAutoScaling


```text
aws-q2-2022/Group/GroupAutoScaling
```

```text
include('aws-q2-2022/Group/GroupAutoScaling')
```



| Illustration | GroupAutoScaling |
| :---: | :---: |
| ![illustration for Illustration](../../aws-q2-2022/Resource/GroupIcons/AutoScaling.png) | ![illustration for GroupAutoScaling](../../aws-q2-2022/Group/GroupAutoScaling.Local.png) |




## GroupAutoScaling

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element GroupAutoScaling
include('aws-q2-2022/Group/GroupAutoScaling')

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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element GroupAutoScaling
include('aws-q2-2022/Group/GroupAutoScaling')

GroupAutoScaling('GroupAutoScaling', 'Group Auto Scaling', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

