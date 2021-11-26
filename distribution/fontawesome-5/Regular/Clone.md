# Clone


```text
fontawesome-5/Regular/Clone
```

```text
include('fontawesome-5/Regular/Clone')
```



| Illustration | Clone |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/Clone.png) | ![illustration for Clone](../../fontawesome-5/Regular/Clone.Local.png) |




## Clone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Clone
include('fontawesome-5/Regular/Clone')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Clone
include('fontawesome-5/Regular/Clone')

' renders the element
Clone('Clone', 'Clone', 'an optional tech label')
@enduml
```

