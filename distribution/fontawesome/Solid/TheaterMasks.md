# TheaterMasks


```text
fontawesome/Solid/TheaterMasks
```

```text
include('fontawesome/Solid/TheaterMasks')
```



| Illustration | TheaterMasks |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TheaterMasks.png) | ![illustration for TheaterMasks](../../fontawesome/Solid/TheaterMasks.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TheaterMasksXs>`
- `<$TheaterMasksSm>`
- `<$TheaterMasksMd>`
- `<$TheaterMasksLg>`





## TheaterMasks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TheaterMasks
include('fontawesome/Solid/TheaterMasks')

' renders the element
TheaterMasks('TheaterMasks', 'Theater Masks', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TheaterMasks
include('fontawesome/Solid/TheaterMasks')

' renders the element
TheaterMasks('TheaterMasks', 'Theater Masks', 'an optional tech label', 'an optional description')
@enduml
```

