# GroupExternalInfrastructure1stParty


```text
gcp/Group/GroupExternalInfrastructure1stParty
```

```text
include('gcp/Group/GroupExternalInfrastructure1stParty')
```



| GroupExternalInfrastructure1stParty |
| :---: |
| ![illustration for GroupExternalInfrastructure1stParty](../../gcp/Group/GroupExternalInfrastructure1stParty.Local.png) |




## GroupExternalInfrastructure1stParty

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element GroupExternalInfrastructure1stParty
include('gcp/Group/GroupExternalInfrastructure1stParty')

GroupExternalInfrastructure1stParty('GroupExternalInfrastructure1stParty', 'Group External Infrastructure1st Party', 'an optional tech label') {
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

' loads the Item which embeds the element GroupExternalInfrastructure1stParty
include('gcp/Group/GroupExternalInfrastructure1stParty')

GroupExternalInfrastructure1stParty('GroupExternalInfrastructure1stParty', 'Group External Infrastructure1st Party', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

