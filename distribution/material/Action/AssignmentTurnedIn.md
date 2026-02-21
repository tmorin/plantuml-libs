# AssignmentTurnedIn


```text
material/Action/AssignmentTurnedIn
```

```text
include('material/Action/AssignmentTurnedIn')
```



| Illustration | AssignmentTurnedIn |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/AssignmentTurnedIn.png) | ![illustration for AssignmentTurnedIn](../../material/Action/AssignmentTurnedIn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AssignmentTurnedInXs>`
- `<$AssignmentTurnedInSm>`
- `<$AssignmentTurnedInMd>`
- `<$AssignmentTurnedInLg>`





## AssignmentTurnedIn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element AssignmentTurnedIn
include('material/Action/AssignmentTurnedIn')

' renders the element
AssignmentTurnedIn('AssignmentTurnedIn', 'Assignment Turned In', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element AssignmentTurnedIn
include('material/Action/AssignmentTurnedIn')

' renders the element
AssignmentTurnedIn('AssignmentTurnedIn', 'Assignment Turned In', 'an optional tech label', 'an optional description')
@enduml
```

