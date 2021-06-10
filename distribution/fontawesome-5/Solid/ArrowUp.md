# ArrowUp


```text
fontawesome-5/Solid/ArrowUp
```

```text
include('fontawesome-5/Solid/ArrowUp')
```



| Illustration | ArrowUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ArrowUp.png) | ![illustration for ArrowUp](../../fontawesome-5/Solid/ArrowUp.Local.png) |




## ArrowUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ArrowUp
include('fontawesome-5/Solid/ArrowUp')

' renders the element
ArrowUp('ArrowUp', 'Arrow Up', 'an optional tech label')
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

' loads the Item which embeds the element ArrowUp
include('fontawesome-5/Solid/ArrowUp')

' renders the element
ArrowUp('ArrowUp', 'Arrow Up', 'an optional tech label')
@enduml
```

