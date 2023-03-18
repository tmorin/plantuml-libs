# GroupAvailabilityZone


```text
aws-q1-2023/Group/GroupAvailabilityZone
```

```text
include('aws-q1-2023/Group/GroupAvailabilityZone')
```



| GroupAvailabilityZone |
| :---: |
| ![illustration for GroupAvailabilityZone](../../aws-q1-2023/Group/GroupAvailabilityZone.Local.png) |







## GroupAvailabilityZone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element GroupAvailabilityZone
include('aws-q1-2023/Group/GroupAvailabilityZone')

GroupAvailabilityZone('GroupAvailabilityZone', 'Group Availability Zone', 'an optional tech label') {
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element GroupAvailabilityZone
include('aws-q1-2023/Group/GroupAvailabilityZone')

GroupAvailabilityZone('GroupAvailabilityZone', 'Group Availability Zone', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

