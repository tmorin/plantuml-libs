# GroupPlainDotted


```text
azure-4/Group/GroupPlainDotted
```

```text
include('azure-4/Group/GroupPlainDotted')
```



| GroupPlainDotted |
| :---: |
| ![illustration for GroupPlainDotted](../../azure-4/Group/GroupPlainDotted.Local.png) |




## GroupPlainDotted

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element GroupPlainDotted
include('azure-4/Group/GroupPlainDotted')

GroupPlainDotted('GroupPlainDotted', 'Group Plain Dotted', 'an optional tech label') {
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
include('azure-4/bootstrap')

' loads the Item which embeds the element GroupPlainDotted
include('azure-4/Group/GroupPlainDotted')

GroupPlainDotted('GroupPlainDotted', 'Group Plain Dotted', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

