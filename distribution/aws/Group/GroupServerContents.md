# GroupServerContents


```text
aws/Group/GroupServerContents
```

```text
include('aws/Group/GroupServerContents')
```



| Illustration | GroupServerContents |
| :---: | :---: |
| ![illustration for Illustration](../../aws/Resource/GroupIcons/ServerContents.png) | ![illustration for GroupServerContents](../../aws/Group/GroupServerContents.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GroupServerContentsXs>`
- `<$GroupServerContentsSm>`
- `<$GroupServerContentsMd>`
- `<$GroupServerContentsLg>`





## GroupServerContents

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element GroupServerContents
include('aws/Group/GroupServerContents')

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
include('aws/bootstrap')

' loads the Item which embeds the element GroupServerContents
include('aws/Group/GroupServerContents')

GroupServerContents('GroupServerContents', 'Group Server Contents', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

