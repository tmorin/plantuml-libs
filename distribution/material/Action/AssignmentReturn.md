# AssignmentReturn


```text
material/Action/AssignmentReturn
```

```text
include('material/Action/AssignmentReturn')
```



| Illustration | AssignmentReturn |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/AssignmentReturn.png) | ![illustration for AssignmentReturn](../../material/Action/AssignmentReturn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AssignmentReturnXs>`
- `<$AssignmentReturnSm>`
- `<$AssignmentReturnMd>`
- `<$AssignmentReturnLg>`





## AssignmentReturn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element AssignmentReturn
include('material/Action/AssignmentReturn')

' renders the element
AssignmentReturn('AssignmentReturn', 'Assignment Return', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AssignmentReturn
include('material/Action/AssignmentReturn')

' renders the element
AssignmentReturn('AssignmentReturn', 'Assignment Return', 'an optional tech label', 'an optional description')
@enduml
```

