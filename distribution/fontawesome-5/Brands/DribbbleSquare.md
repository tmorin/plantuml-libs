# DribbbleSquare


```text
fontawesome-5/Brands/DribbbleSquare
```

```text
include('fontawesome-5/Brands/DribbbleSquare')
```



| Illustration | DribbbleSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/DribbbleSquare.png) | ![illustration for DribbbleSquare](../../fontawesome-5/Brands/DribbbleSquare.Local.png) |




## DribbbleSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element DribbbleSquare
include('fontawesome-5/Brands/DribbbleSquare')

' renders the element
DribbbleSquare('DribbbleSquare', 'Dribbble Square', 'an optional tech label')
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

' loads the Item which embeds the element DribbbleSquare
include('fontawesome-5/Brands/DribbbleSquare')

' renders the element
DribbbleSquare('DribbbleSquare', 'Dribbble Square', 'an optional tech label')
@enduml
```

