# ArrowCircleUp


```text
fontawesome-5/Solid/ArrowCircleUp
```

```text
include('fontawesome-5/Solid/ArrowCircleUp')
```



| Illustration | ArrowCircleUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ArrowCircleUp.png) | ![illustration for ArrowCircleUp](../../fontawesome-5/Solid/ArrowCircleUp.Local.png) |




## ArrowCircleUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ArrowCircleUp
include('fontawesome-5/Solid/ArrowCircleUp')

' renders the element
ArrowCircleUp('ArrowCircleUp', 'Arrow Circle Up', 'an optional tech label')
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

' loads the Item which embeds the element ArrowCircleUp
include('fontawesome-5/Solid/ArrowCircleUp')

' renders the element
ArrowCircleUp('ArrowCircleUp', 'Arrow Circle Up', 'an optional tech label')
@enduml
```

