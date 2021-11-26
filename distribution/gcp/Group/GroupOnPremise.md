# GroupOnPremise


```text
gcp/Group/GroupOnPremise
```

```text
include('gcp/Group/GroupOnPremise')
```



| GroupOnPremise |
| :---: |
| ![illustration for GroupOnPremise](../../gcp/Group/GroupOnPremise.Local.png) |




## GroupOnPremise

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element GroupOnPremise
include('gcp/Group/GroupOnPremise')

GroupOnPremise('GroupOnPremise', 'Group On Premise', 'an optional tech label') {
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

' loads the Item which embeds the element GroupOnPremise
include('gcp/Group/GroupOnPremise')

GroupOnPremise('GroupOnPremise', 'Group On Premise', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

