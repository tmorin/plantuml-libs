# GroupAutoScaling


```text
aws-q1-2024/Group/GroupAutoScaling
```

```text
include('aws-q1-2024/Group/GroupAutoScaling')
```



| Illustration | GroupAutoScaling |
| :---: | :---: |
| ![illustration for Illustration](../../aws-q1-2024/Resource/GroupIcons/AutoScalingGroup.png) | ![illustration for GroupAutoScaling](../../aws-q1-2024/Group/GroupAutoScaling.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GroupAutoScalingXs>`
- `<$GroupAutoScalingSm>`
- `<$GroupAutoScalingMd>`
- `<$GroupAutoScalingLg>`





## GroupAutoScaling

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element GroupAutoScaling
include('aws-q1-2024/Group/GroupAutoScaling')

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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element GroupAutoScaling
include('aws-q1-2024/Group/GroupAutoScaling')

GroupAutoScaling('GroupAutoScaling', 'Group Auto Scaling', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

