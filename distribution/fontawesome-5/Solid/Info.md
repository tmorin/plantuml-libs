# Info


```text
fontawesome-5/Solid/Info
```

```text
include('fontawesome-5/Solid/Info')
```



| Illustration | Info |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Info.png) | ![illustration for Info](../../fontawesome-5/Solid/Info.Local.png) |




## Info

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Info
include('fontawesome-5/Solid/Info')

' renders the element
Info('Info', 'Info', 'an optional tech label')
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

' loads the Item which embeds the element Info
include('fontawesome-5/Solid/Info')

' renders the element
Info('Info', 'Info', 'an optional tech label')
@enduml
```

