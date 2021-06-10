# PinterestSquare


```text
fontawesome-5/Brands/PinterestSquare
```

```text
include('fontawesome-5/Brands/PinterestSquare')
```



| Illustration | PinterestSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/PinterestSquare.png) | ![illustration for PinterestSquare](../../fontawesome-5/Brands/PinterestSquare.Local.png) |




## PinterestSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PinterestSquare
include('fontawesome-5/Brands/PinterestSquare')

' renders the element
PinterestSquare('PinterestSquare', 'Pinterest Square', 'an optional tech label')
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

' loads the Item which embeds the element PinterestSquare
include('fontawesome-5/Brands/PinterestSquare')

' renders the element
PinterestSquare('PinterestSquare', 'Pinterest Square', 'an optional tech label')
@enduml
```

