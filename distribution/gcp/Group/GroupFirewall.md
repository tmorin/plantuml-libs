# GroupFirewall


```text
gcp/Group/GroupFirewall
```

```text
include('gcp/Group/GroupFirewall')
```



| GroupFirewall |
| :---: |
| ![illustration for GroupFirewall](../../gcp/Group/GroupFirewall.Local.png) |




## GroupFirewall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element GroupFirewall
include('gcp/Group/GroupFirewall')

GroupFirewall('GroupFirewall', 'Group Firewall', 'an optional tech label') {
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

' loads the Item which embeds the element GroupFirewall
include('gcp/Group/GroupFirewall')

GroupFirewall('GroupFirewall', 'Group Firewall', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

