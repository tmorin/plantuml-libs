# ClipboardList


```text
fontawesome-6/Solid/ClipboardList
```

```text
include('fontawesome-6/Solid/ClipboardList')
```



| Illustration | ClipboardList |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ClipboardList.png) | ![illustration for ClipboardList](../../fontawesome-6/Solid/ClipboardList.Local.png) |




## ClipboardList

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ClipboardList
include('fontawesome-6/Solid/ClipboardList')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ClipboardList
include('fontawesome-6/Solid/ClipboardList')

' renders the element
ClipboardList('ClipboardList', 'Clipboard List', 'an optional tech label', 'an optional description')
@enduml
```

