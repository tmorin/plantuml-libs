# GalacticRepublic


```text
fontawesome-5/Brands/GalacticRepublic
```

```text
include('fontawesome-5/Brands/GalacticRepublic')
```



| Illustration | GalacticRepublic |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/GalacticRepublic.png) | ![illustration for GalacticRepublic](../../fontawesome-5/Brands/GalacticRepublic.Local.png) |




## GalacticRepublic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GalacticRepublic
include('fontawesome-5/Brands/GalacticRepublic')

' renders the element
GalacticRepublic('GalacticRepublic', 'Galactic Republic', 'an optional tech label')
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

' loads the Item which embeds the element GalacticRepublic
include('fontawesome-5/Brands/GalacticRepublic')

' renders the element
GalacticRepublic('GalacticRepublic', 'Galactic Republic', 'an optional tech label')
@enduml
```

