# Clone


```text
fontawesome-6/Solid/Clone
```

```text
include('fontawesome-6/Solid/Clone')
```



| Illustration | Clone |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Clone.png) | ![illustration for Clone](../../fontawesome-6/Solid/Clone.Local.png) |




## Clone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Clone
include('fontawesome-6/Solid/Clone')

' renders the element
Clone('Clone', 'Clone', 'an optional tech label')
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

' loads the Item which embeds the element Clone
include('fontawesome-6/Solid/Clone')

' renders the element
Clone('Clone', 'Clone', 'an optional tech label')
@enduml
```

