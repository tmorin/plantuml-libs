# GlobeAsia


```text
fontawesome-5/Solid/GlobeAsia
```

```text
include('fontawesome-5/Solid/GlobeAsia')
```



| Illustration | GlobeAsia |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/GlobeAsia.png) | ![illustration for GlobeAsia](../../fontawesome-5/Solid/GlobeAsia.Local.png) |




## GlobeAsia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GlobeAsia
include('fontawesome-5/Solid/GlobeAsia')

' renders the element
GlobeAsia('GlobeAsia', 'Globe Asia', 'an optional tech label')
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

' loads the Item which embeds the element GlobeAsia
include('fontawesome-5/Solid/GlobeAsia')

' renders the element
GlobeAsia('GlobeAsia', 'Globe Asia', 'an optional tech label')
@enduml
```

