# GroupCloud


```text
aws-q1-2025/Group/GroupCloud
```

```text
include('aws-q1-2025/Group/GroupCloud')
```



| Illustration | GroupCloud |
| :---: | :---: |
| ![illustration for Illustration](../../aws-q1-2025/Resource/GroupIcons/Cloud.png) | ![illustration for GroupCloud](../../aws-q1-2025/Group/GroupCloud.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GroupCloudXs>`
- `<$GroupCloudSm>`
- `<$GroupCloudMd>`
- `<$GroupCloudLg>`





## GroupCloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element GroupCloud
include('aws-q1-2025/Group/GroupCloud')

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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element GroupCloud
include('aws-q1-2025/Group/GroupCloud')

GroupCloud('GroupCloud', 'Group Cloud', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

