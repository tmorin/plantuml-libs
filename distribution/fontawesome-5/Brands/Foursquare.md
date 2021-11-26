# Foursquare


```text
fontawesome-5/Brands/Foursquare
```

```text
include('fontawesome-5/Brands/Foursquare')
```



| Illustration | Foursquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Foursquare.png) | ![illustration for Foursquare](../../fontawesome-5/Brands/Foursquare.Local.png) |




## Foursquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Foursquare
include('fontawesome-5/Brands/Foursquare')

' renders the element
Foursquare('Foursquare', 'Foursquare', 'an optional tech label')
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

' loads the Item which embeds the element Foursquare
include('fontawesome-5/Brands/Foursquare')

' renders the element
Foursquare('Foursquare', 'Foursquare', 'an optional tech label')
@enduml
```

