# GroupPlain


```text
aws-20210131/Group/GroupPlain
```

```text
include('aws-20210131/Group/GroupPlain')
```



| GroupPlain |
| :---: |
| ![illustration for GroupPlain](../../aws-20210131/Group/GroupPlain.Local.png) |




## GroupPlain

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element GroupPlain
include('aws-20210131/Group/GroupPlain')

GroupPlain('GroupPlain', 'Group Plain', 'an optional tech label') {
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

' loads the Item which embeds the element GroupPlain
include('aws-20210131/Group/GroupPlain')

GroupPlain('GroupPlain', 'Group Plain', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

