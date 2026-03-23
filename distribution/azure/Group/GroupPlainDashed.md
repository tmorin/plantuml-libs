# GroupPlainDashed


```text
azure/Group/GroupPlainDashed
```

```text
include('azure/Group/GroupPlainDashed')
```



| GroupPlainDashed |
| :---: |
| ![illustration for GroupPlainDashed](../../azure/Group/GroupPlainDashed.Local.png) |







## GroupPlainDashed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element GroupPlainDashed
include('azure/Group/GroupPlainDashed')

GroupPlainDashed('GroupPlainDashed', 'Group Plain Dashed', 'an optional tech label') {
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
include('azure/bootstrap')

' loads the Item which embeds the element GroupPlainDashed
include('azure/Group/GroupPlainDashed')

GroupPlainDashed('GroupPlainDashed', 'Group Plain Dashed', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

