# RectangleAd


```text
fontawesome-6/Solid/RectangleAd
```

```text
include('fontawesome-6/Solid/RectangleAd')
```



| Illustration | RectangleAd |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/RectangleAd.png) | ![illustration for RectangleAd](../../fontawesome-6/Solid/RectangleAd.Local.png) |




## RectangleAd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element RectangleAd
include('fontawesome-6/Solid/RectangleAd')

' renders the element
RectangleAd('RectangleAd', 'Rectangle Ad', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RectangleAd
include('fontawesome-6/Solid/RectangleAd')

' renders the element
RectangleAd('RectangleAd', 'Rectangle Ad', 'an optional tech label', 'an optional description')
@enduml
```

