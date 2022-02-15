# Rainbow


```text
fontawesome-6/Solid/Rainbow
```

```text
include('fontawesome-6/Solid/Rainbow')
```



| Illustration | Rainbow |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Rainbow.png) | ![illustration for Rainbow](../../fontawesome-6/Solid/Rainbow.Local.png) |




## Rainbow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Rainbow
include('fontawesome-6/Solid/Rainbow')

' renders the element
Rainbow('Rainbow', 'Rainbow', 'an optional tech label')
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

' loads the Item which embeds the element Rainbow
include('fontawesome-6/Solid/Rainbow')

' renders the element
Rainbow('Rainbow', 'Rainbow', 'an optional tech label')
@enduml
```

