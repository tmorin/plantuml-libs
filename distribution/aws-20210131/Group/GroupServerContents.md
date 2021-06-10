# GroupServerContents


```text
aws-20210131/Group/GroupServerContents
```

```text
include('aws-20210131/Group/GroupServerContents')
```



| Illustration | GroupServerContents |
| :---: | :---: |
| ![illustration for Illustration](../../aws-20210131/Resource/GroupIcons/ServerContents.png) | ![illustration for GroupServerContents](../../aws-20210131/Group/GroupServerContents.Local.png) |




## GroupServerContents

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element GroupServerContents
include('aws-20210131/Group/GroupServerContents')

GroupServerContents('GroupServerContents', 'Group Server Contents', 'an optional tech label') {
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

' loads the Item which embeds the element GroupServerContents
include('aws-20210131/Group/GroupServerContents')

GroupServerContents('GroupServerContents', 'Group Server Contents', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

