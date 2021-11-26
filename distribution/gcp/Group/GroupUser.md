# GroupUser


```text
gcp/Group/GroupUser
```

```text
include('gcp/Group/GroupUser')
```



| GroupUser |
| :---: |
| ![illustration for GroupUser](../../gcp/Group/GroupUser.Local.png) |




## GroupUser

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element GroupUser
include('gcp/Group/GroupUser')

GroupUser('GroupUser', 'Group User', 'an optional tech label') {
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
include('gcp/bootstrap')

' loads the Item which embeds the element GroupUser
include('gcp/Group/GroupUser')

GroupUser('GroupUser', 'Group User', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

