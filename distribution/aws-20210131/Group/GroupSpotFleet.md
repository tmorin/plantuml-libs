# GroupSpotFleet


```text
aws-20210131/Group/GroupSpotFleet
```

```text
include('aws-20210131/Group/GroupSpotFleet')
```



| Illustration | GroupSpotFleet |
| :---: | :---: |
| ![illustration for Illustration](../../aws-20210131/Resource/GroupIcons/SpotFleet.png) | ![illustration for GroupSpotFleet](../../aws-20210131/Group/GroupSpotFleet.Local.png) |




## GroupSpotFleet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element GroupSpotFleet
include('aws-20210131/Group/GroupSpotFleet')

GroupSpotFleet('GroupSpotFleet', 'Group Spot Fleet', 'an optional tech label') {
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

' loads the Item which embeds the element GroupSpotFleet
include('aws-20210131/Group/GroupSpotFleet')

GroupSpotFleet('GroupSpotFleet', 'Group Spot Fleet', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

