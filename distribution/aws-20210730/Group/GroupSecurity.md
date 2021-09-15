# GroupSecurity


```text
aws-20210730/Group/GroupSecurity
```

```text
include('aws-20210730/Group/GroupSecurity')
```



| GroupSecurity |
| :---: |
| ![illustration for GroupSecurity](../../aws-20210730/Group/GroupSecurity.Local.png) |




## GroupSecurity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element GroupSecurity
include('aws-20210730/Group/GroupSecurity')

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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element GroupSecurity
include('aws-20210730/Group/GroupSecurity')

GroupSecurity('GroupSecurity', 'Group Security', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

