# EarthAsia


```text
fontawesome-6/Solid/EarthAsia
```

```text
include('fontawesome-6/Solid/EarthAsia')
```



| Illustration | EarthAsia |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/EarthAsia.png) | ![illustration for EarthAsia](../../fontawesome-6/Solid/EarthAsia.Local.png) |




## EarthAsia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element EarthAsia
include('fontawesome-6/Solid/EarthAsia')

' renders the element
EarthAsia('EarthAsia', 'Earth Asia', 'an optional tech label')
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

' loads the Item which embeds the element EarthAsia
include('fontawesome-6/Solid/EarthAsia')

' renders the element
EarthAsia('EarthAsia', 'Earth Asia', 'an optional tech label')
@enduml
```

