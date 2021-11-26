# GroupRegion


```text
aws-20210730/Group/GroupRegion
```

```text
include('aws-20210730/Group/GroupRegion')
```



| Illustration | GroupRegion |
| :---: | :---: |
| ![illustration for Illustration](../../aws-20210730/Resource/GroupIcons/Region.png) | ![illustration for GroupRegion](../../aws-20210730/Group/GroupRegion.Local.png) |




## GroupRegion

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element GroupRegion
include('aws-20210730/Group/GroupRegion')

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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element GroupRegion
include('aws-20210730/Group/GroupRegion')

GroupRegion('GroupRegion', 'Group Region', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

