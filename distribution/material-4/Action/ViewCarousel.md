# ViewCarousel


```text
material-4/Action/ViewCarousel
```

```text
include('material-4/Action/ViewCarousel')
```



| Illustration | ViewCarousel |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/ViewCarousel.png) | ![illustration for ViewCarousel](../../material-4/Action/ViewCarousel.Local.png) |




## ViewCarousel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ViewCarousel
include('material-4/Action/ViewCarousel')

' renders the element
ViewCarousel('ViewCarousel', 'View Carousel', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element ViewCarousel
include('material-4/Action/ViewCarousel')

' renders the element
ViewCarousel('ViewCarousel', 'View Carousel', 'an optional tech label')
@enduml
```

