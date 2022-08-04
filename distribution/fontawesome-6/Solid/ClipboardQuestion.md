# ClipboardQuestion


```text
fontawesome-6/Solid/ClipboardQuestion
```

```text
include('fontawesome-6/Solid/ClipboardQuestion')
```



| Illustration | ClipboardQuestion |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ClipboardQuestion.png) | ![illustration for ClipboardQuestion](../../fontawesome-6/Solid/ClipboardQuestion.Local.png) |




## ClipboardQuestion

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ClipboardQuestion
include('fontawesome-6/Solid/ClipboardQuestion')

' renders the element
ClipboardQuestion('ClipboardQuestion', 'Clipboard Question', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ClipboardQuestion
include('fontawesome-6/Solid/ClipboardQuestion')

' renders the element
ClipboardQuestion('ClipboardQuestion', 'Clipboard Question', 'an optional tech label', 'an optional description')
@enduml
```

