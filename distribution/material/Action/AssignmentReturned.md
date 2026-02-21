# AssignmentReturned


```text
material/Action/AssignmentReturned
```

```text
include('material/Action/AssignmentReturned')
```



| Illustration | AssignmentReturned |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/AssignmentReturned.png) | ![illustration for AssignmentReturned](../../material/Action/AssignmentReturned.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AssignmentReturnedXs>`
- `<$AssignmentReturnedSm>`
- `<$AssignmentReturnedMd>`
- `<$AssignmentReturnedLg>`





## AssignmentReturned

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element AssignmentReturned
include('material/Action/AssignmentReturned')

' renders the element
AssignmentReturned('AssignmentReturned', 'Assignment Returned', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AssignmentReturned
include('material/Action/AssignmentReturned')

' renders the element
AssignmentReturned('AssignmentReturned', 'Assignment Returned', 'an optional tech label', 'an optional description')
@enduml
```

