# GroupRegion


```text
aws-q2-2024/Group/GroupRegion
```

```text
include('aws-q2-2024/Group/GroupRegion')
```



| Illustration | GroupRegion |
| :---: | :---: |
| ![illustration for Illustration](../../aws-q2-2024/Resource/GroupIcons/Region.png) | ![illustration for GroupRegion](../../aws-q2-2024/Group/GroupRegion.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GroupRegionXs>`
- `<$GroupRegionSm>`
- `<$GroupRegionMd>`
- `<$GroupRegionLg>`





## GroupRegion

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element GroupRegion
include('aws-q2-2024/Group/GroupRegion')

GroupRegion('GroupRegion', 'Group Region', 'an optional tech label') {
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

' loads the Item which embeds the element GroupRegion
include('aws-q2-2024/Group/GroupRegion')

GroupRegion('GroupRegion', 'Group Region', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

