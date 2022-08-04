# TrashCanArrowUp


```text
fontawesome-6/Solid/TrashCanArrowUp
```

```text
include('fontawesome-6/Solid/TrashCanArrowUp')
```



| Illustration | TrashCanArrowUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/TrashCanArrowUp.png) | ![illustration for TrashCanArrowUp](../../fontawesome-6/Solid/TrashCanArrowUp.Local.png) |




## TrashCanArrowUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TrashCanArrowUp
include('fontawesome-6/Solid/TrashCanArrowUp')

' renders the element
TrashCanArrowUp('TrashCanArrowUp', 'Trash Can Arrow Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TrashCanArrowUp
include('fontawesome-6/Solid/TrashCanArrowUp')

' renders the element
TrashCanArrowUp('TrashCanArrowUp', 'Trash Can Arrow Up', 'an optional tech label', 'an optional description')
@enduml
```

