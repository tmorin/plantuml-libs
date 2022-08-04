# Info


```text
fontawesome-6/Solid/Info
```

```text
include('fontawesome-6/Solid/Info')
```



| Illustration | Info |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Info.png) | ![illustration for Info](../../fontawesome-6/Solid/Info.Local.png) |




## Info

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Info
include('fontawesome-6/Solid/Info')

' renders the element
Info('Info', 'Info', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Info
include('fontawesome-6/Solid/Info')

' renders the element
Info('Info', 'Info', 'an optional tech label', 'an optional description')
@enduml
```

