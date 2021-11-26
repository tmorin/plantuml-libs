# ClipboardList


```text
fontawesome-5/Solid/ClipboardList
```

```text
include('fontawesome-5/Solid/ClipboardList')
```



| Illustration | ClipboardList |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ClipboardList.png) | ![illustration for ClipboardList](../../fontawesome-5/Solid/ClipboardList.Local.png) |




## ClipboardList

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ClipboardList
include('fontawesome-5/Solid/ClipboardList')

' renders the element
ClipboardList('ClipboardList', 'Clipboard List', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ClipboardList
include('fontawesome-5/Solid/ClipboardList')

' renders the element
ClipboardList('ClipboardList', 'Clipboard List', 'an optional tech label')
@enduml
```

