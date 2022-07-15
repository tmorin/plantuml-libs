# GroupCorporateDataCenter


```text
aws-q2-2022/Group/GroupCorporateDataCenter
```

```text
include('aws-q2-2022/Group/GroupCorporateDataCenter')
```



| Illustration | GroupCorporateDataCenter |
| :---: | :---: |
| ![illustration for Illustration](../../aws-q2-2022/Resource/GroupIcons/CorporateDataCenter.png) | ![illustration for GroupCorporateDataCenter](../../aws-q2-2022/Group/GroupCorporateDataCenter.Local.png) |




## GroupCorporateDataCenter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element GroupCorporateDataCenter
include('aws-q2-2022/Group/GroupCorporateDataCenter')

GroupCorporateDataCenter('GroupCorporateDataCenter', 'Group Corporate Data Center', 'an optional tech label') {
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element GroupCorporateDataCenter
include('aws-q2-2022/Group/GroupCorporateDataCenter')

GroupCorporateDataCenter('GroupCorporateDataCenter', 'Group Corporate Data Center', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

