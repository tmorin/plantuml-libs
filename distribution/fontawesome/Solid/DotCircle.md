# DotCircle


```text
fontawesome/Solid/DotCircle
```

```text
include('fontawesome/Solid/DotCircle')
```



| Illustration | DotCircle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/DotCircle.png) | ![illustration for DotCircle](../../fontawesome/Solid/DotCircle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DotCircleXs>`
- `<$DotCircleSm>`
- `<$DotCircleMd>`
- `<$DotCircleLg>`





## DotCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element DotCircle
include('fontawesome/Solid/DotCircle')

' renders the element
DotCircle('DotCircle', 'Dot Circle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DotCircle
include('fontawesome/Solid/DotCircle')

' renders the element
DotCircle('DotCircle', 'Dot Circle', 'an optional tech label', 'an optional description')
@enduml
```

