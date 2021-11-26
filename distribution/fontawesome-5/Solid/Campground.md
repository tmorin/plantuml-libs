# Campground


```text
fontawesome-5/Solid/Campground
```

```text
include('fontawesome-5/Solid/Campground')
```



| Illustration | Campground |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Campground.png) | ![illustration for Campground](../../fontawesome-5/Solid/Campground.Local.png) |




## Campground

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Campground
include('fontawesome-5/Solid/Campground')

' renders the element
Campground('Campground', 'Campground', 'an optional tech label')
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

' loads the Item which embeds the element Campground
include('fontawesome-5/Solid/Campground')

' renders the element
Campground('Campground', 'Campground', 'an optional tech label')
@enduml
```

