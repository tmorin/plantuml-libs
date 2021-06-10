# BoxOpen


```text
fontawesome-5/Solid/BoxOpen
```

```text
include('fontawesome-5/Solid/BoxOpen')
```



| Illustration | BoxOpen |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/BoxOpen.png) | ![illustration for BoxOpen](../../fontawesome-5/Solid/BoxOpen.Local.png) |




## BoxOpen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element BoxOpen
include('fontawesome-5/Solid/BoxOpen')

' renders the element
BoxOpen('BoxOpen', 'Box Open', 'an optional tech label')
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

' loads the Item which embeds the element BoxOpen
include('fontawesome-5/Solid/BoxOpen')

' renders the element
BoxOpen('BoxOpen', 'Box Open', 'an optional tech label')
@enduml
```

