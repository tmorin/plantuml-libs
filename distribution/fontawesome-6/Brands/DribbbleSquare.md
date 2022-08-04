# DribbbleSquare


```text
fontawesome-6/Brands/DribbbleSquare
```

```text
include('fontawesome-6/Brands/DribbbleSquare')
```



| Illustration | DribbbleSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/DribbbleSquare.png) | ![illustration for DribbbleSquare](../../fontawesome-6/Brands/DribbbleSquare.Local.png) |




## DribbbleSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element DribbbleSquare
include('fontawesome-6/Brands/DribbbleSquare')

' renders the element
DribbbleSquare('DribbbleSquare', 'Dribbble Square', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DribbbleSquare
include('fontawesome-6/Brands/DribbbleSquare')

' renders the element
DribbbleSquare('DribbbleSquare', 'Dribbble Square', 'an optional tech label', 'an optional description')
@enduml
```

