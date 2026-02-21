# ClipboardCheck


```text
fontawesome/Solid/ClipboardCheck
```

```text
include('fontawesome/Solid/ClipboardCheck')
```



| Illustration | ClipboardCheck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ClipboardCheck.png) | ![illustration for ClipboardCheck](../../fontawesome/Solid/ClipboardCheck.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ClipboardCheckXs>`
- `<$ClipboardCheckSm>`
- `<$ClipboardCheckMd>`
- `<$ClipboardCheckLg>`





## ClipboardCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ClipboardCheck
include('fontawesome/Solid/ClipboardCheck')

' renders the element
ClipboardCheck('ClipboardCheck', 'Clipboard Check', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ClipboardCheck
include('fontawesome/Solid/ClipboardCheck')

' renders the element
ClipboardCheck('ClipboardCheck', 'Clipboard Check', 'an optional tech label', 'an optional description')
@enduml
```

