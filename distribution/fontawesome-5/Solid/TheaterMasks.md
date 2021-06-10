# TheaterMasks


```text
fontawesome-5/Solid/TheaterMasks
```

```text
include('fontawesome-5/Solid/TheaterMasks')
```



| Illustration | TheaterMasks |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/TheaterMasks.png) | ![illustration for TheaterMasks](../../fontawesome-5/Solid/TheaterMasks.Local.png) |




## TheaterMasks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element TheaterMasks
include('fontawesome-5/Solid/TheaterMasks')

' renders the element
TheaterMasks('TheaterMasks', 'Theater Masks', 'an optional tech label')
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

' loads the Item which embeds the element TheaterMasks
include('fontawesome-5/Solid/TheaterMasks')

' renders the element
TheaterMasks('TheaterMasks', 'Theater Masks', 'an optional tech label')
@enduml
```

