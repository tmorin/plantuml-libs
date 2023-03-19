# PlaneCircleXmark


```text
fontawesome-6/Solid/PlaneCircleXmark
```

```text
include('fontawesome-6/Solid/PlaneCircleXmark')
```



| Illustration | PlaneCircleXmark |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PlaneCircleXmark.png) | ![illustration for PlaneCircleXmark](../../fontawesome-6/Solid/PlaneCircleXmark.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlaneCircleXmarkXs>`
- `<$PlaneCircleXmarkSm>`
- `<$PlaneCircleXmarkMd>`
- `<$PlaneCircleXmarkLg>`





## PlaneCircleXmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PlaneCircleXmark
include('fontawesome-6/Solid/PlaneCircleXmark')

' renders the element
PlaneCircleXmark('PlaneCircleXmark', 'Plane Circle Xmark', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PlaneCircleXmark
include('fontawesome-6/Solid/PlaneCircleXmark')

' renders the element
PlaneCircleXmark('PlaneCircleXmark', 'Plane Circle Xmark', 'an optional tech label', 'an optional description')
@enduml
```

