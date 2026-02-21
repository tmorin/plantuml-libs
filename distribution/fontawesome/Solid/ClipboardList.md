# ClipboardList


```text
fontawesome/Solid/ClipboardList
```

```text
include('fontawesome/Solid/ClipboardList')
```



| Illustration | ClipboardList |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ClipboardList.png) | ![illustration for ClipboardList](../../fontawesome/Solid/ClipboardList.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ClipboardListXs>`
- `<$ClipboardListSm>`
- `<$ClipboardListMd>`
- `<$ClipboardListLg>`





## ClipboardList

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ClipboardList
include('fontawesome/Solid/ClipboardList')

' renders the element
ClipboardList('ClipboardList', 'Clipboard List', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element ClipboardList
include('fontawesome/Solid/ClipboardList')

' renders the element
ClipboardList('ClipboardList', 'Clipboard List', 'an optional tech label', 'an optional description')
@enduml
```

