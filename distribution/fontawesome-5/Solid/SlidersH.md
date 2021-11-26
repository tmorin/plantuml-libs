# SlidersH


```text
fontawesome-5/Solid/SlidersH
```

```text
include('fontawesome-5/Solid/SlidersH')
```



| Illustration | SlidersH |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/SlidersH.png) | ![illustration for SlidersH](../../fontawesome-5/Solid/SlidersH.Local.png) |




## SlidersH

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SlidersH
include('fontawesome-5/Solid/SlidersH')

' renders the element
SlidersH('SlidersH', 'Sliders H', 'an optional tech label')
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

' loads the Item which embeds the element SlidersH
include('fontawesome-5/Solid/SlidersH')

' renders the element
SlidersH('SlidersH', 'Sliders H', 'an optional tech label')
@enduml
```

