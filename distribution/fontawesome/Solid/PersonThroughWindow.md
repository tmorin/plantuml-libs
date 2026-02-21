# PersonThroughWindow


```text
fontawesome/Solid/PersonThroughWindow
```

```text
include('fontawesome/Solid/PersonThroughWindow')
```



| Illustration | PersonThroughWindow |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PersonThroughWindow.png) | ![illustration for PersonThroughWindow](../../fontawesome/Solid/PersonThroughWindow.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonThroughWindowXs>`
- `<$PersonThroughWindowSm>`
- `<$PersonThroughWindowMd>`
- `<$PersonThroughWindowLg>`





## PersonThroughWindow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PersonThroughWindow
include('fontawesome/Solid/PersonThroughWindow')

' renders the element
PersonThroughWindow('PersonThroughWindow', 'Person Through Window', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element PersonThroughWindow
include('fontawesome/Solid/PersonThroughWindow')

' renders the element
PersonThroughWindow('PersonThroughWindow', 'Person Through Window', 'an optional tech label', 'an optional description')
@enduml
```

