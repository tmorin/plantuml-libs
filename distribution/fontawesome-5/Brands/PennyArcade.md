# PennyArcade


```text
fontawesome-5/Brands/PennyArcade
```

```text
include('fontawesome-5/Brands/PennyArcade')
```



| Illustration | PennyArcade |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/PennyArcade.png) | ![illustration for PennyArcade](../../fontawesome-5/Brands/PennyArcade.Local.png) |




## PennyArcade

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PennyArcade
include('fontawesome-5/Brands/PennyArcade')

' renders the element
PennyArcade('PennyArcade', 'Penny Arcade', 'an optional tech label')
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

' loads the Item which embeds the element PennyArcade
include('fontawesome-5/Brands/PennyArcade')

' renders the element
PennyArcade('PennyArcade', 'Penny Arcade', 'an optional tech label')
@enduml
```

