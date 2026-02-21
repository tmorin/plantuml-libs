# BorderTopLeft


```text
fontawesome/Solid/BorderTopLeft
```

```text
include('fontawesome/Solid/BorderTopLeft')
```



| Illustration | BorderTopLeft |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BorderTopLeft.png) | ![illustration for BorderTopLeft](../../fontawesome/Solid/BorderTopLeft.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BorderTopLeftXs>`
- `<$BorderTopLeftSm>`
- `<$BorderTopLeftMd>`
- `<$BorderTopLeftLg>`





## BorderTopLeft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BorderTopLeft
include('fontawesome/Solid/BorderTopLeft')

' renders the element
BorderTopLeft('BorderTopLeft', 'Border Top Left', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BorderTopLeft
include('fontawesome/Solid/BorderTopLeft')

' renders the element
BorderTopLeft('BorderTopLeft', 'Border Top Left', 'an optional tech label', 'an optional description')
@enduml
```

