# ScrollTorah


```text
fontawesome-6/Solid/ScrollTorah
```

```text
include('fontawesome-6/Solid/ScrollTorah')
```



| Illustration | ScrollTorah |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ScrollTorah.png) | ![illustration for ScrollTorah](../../fontawesome-6/Solid/ScrollTorah.Local.png) |




## ScrollTorah

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ScrollTorah
include('fontawesome-6/Solid/ScrollTorah')

' renders the element
ScrollTorah('ScrollTorah', 'Scroll Torah', 'an optional tech label')
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

' loads the Item which embeds the element ScrollTorah
include('fontawesome-6/Solid/ScrollTorah')

' renders the element
ScrollTorah('ScrollTorah', 'Scroll Torah', 'an optional tech label')
@enduml
```

