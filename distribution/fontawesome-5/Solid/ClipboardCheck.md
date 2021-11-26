# ClipboardCheck


```text
fontawesome-5/Solid/ClipboardCheck
```

```text
include('fontawesome-5/Solid/ClipboardCheck')
```



| Illustration | ClipboardCheck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ClipboardCheck.png) | ![illustration for ClipboardCheck](../../fontawesome-5/Solid/ClipboardCheck.Local.png) |




## ClipboardCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ClipboardCheck
include('fontawesome-5/Solid/ClipboardCheck')

' renders the element
ClipboardCheck('ClipboardCheck', 'Clipboard Check', 'an optional tech label')
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

' loads the Item which embeds the element ClipboardCheck
include('fontawesome-5/Solid/ClipboardCheck')

' renders the element
ClipboardCheck('ClipboardCheck', 'Clipboard Check', 'an optional tech label')
@enduml
```

