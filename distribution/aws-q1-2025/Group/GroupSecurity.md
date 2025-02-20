# GroupSecurity


```text
aws-q1-2025/Group/GroupSecurity
```

```text
include('aws-q1-2025/Group/GroupSecurity')
```



| GroupSecurity |
| :---: |
| ![illustration for GroupSecurity](../../aws-q1-2025/Group/GroupSecurity.Local.png) |







## GroupSecurity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element GroupSecurity
include('aws-q1-2025/Group/GroupSecurity')

GroupSecurity('GroupSecurity', 'Group Security', 'an optional tech label') {
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

' loads the Item which embeds the element GroupSecurity
include('aws-q1-2025/Group/GroupSecurity')

GroupSecurity('GroupSecurity', 'Group Security', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

