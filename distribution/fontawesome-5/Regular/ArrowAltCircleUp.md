# ArrowAltCircleUp


```text
fontawesome-5/Regular/ArrowAltCircleUp
```

```text
include('fontawesome-5/Regular/ArrowAltCircleUp')
```



| Illustration | ArrowAltCircleUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/ArrowAltCircleUp.png) | ![illustration for ArrowAltCircleUp](../../fontawesome-5/Regular/ArrowAltCircleUp.Local.png) |




## ArrowAltCircleUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ArrowAltCircleUp
include('fontawesome-5/Regular/ArrowAltCircleUp')

' renders the element
ArrowAltCircleUp('ArrowAltCircleUp', 'Arrow Alt Circle Up', 'an optional tech label')
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

' loads the Item which embeds the element ArrowAltCircleUp
include('fontawesome-5/Regular/ArrowAltCircleUp')

' renders the element
ArrowAltCircleUp('ArrowAltCircleUp', 'Arrow Alt Circle Up', 'an optional tech label')
@enduml
```

