# Foursquare


```text
fontawesome-6/Brands/Foursquare
```

```text
include('fontawesome-6/Brands/Foursquare')
```



| Illustration | Foursquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Foursquare.png) | ![illustration for Foursquare](../../fontawesome-6/Brands/Foursquare.Local.png) |




## Foursquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Foursquare
include('fontawesome-6/Brands/Foursquare')

' renders the element
Foursquare('Foursquare', 'Foursquare', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Foursquare
include('fontawesome-6/Brands/Foursquare')

' renders the element
Foursquare('Foursquare', 'Foursquare', 'an optional tech label', 'an optional description')
@enduml
```

