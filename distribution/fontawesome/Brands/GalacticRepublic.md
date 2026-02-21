# GalacticRepublic


```text
fontawesome/Brands/GalacticRepublic
```

```text
include('fontawesome/Brands/GalacticRepublic')
```



| Illustration | GalacticRepublic |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/GalacticRepublic.png) | ![illustration for GalacticRepublic](../../fontawesome/Brands/GalacticRepublic.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GalacticRepublicXs>`
- `<$GalacticRepublicSm>`
- `<$GalacticRepublicMd>`
- `<$GalacticRepublicLg>`





## GalacticRepublic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GalacticRepublic
include('fontawesome/Brands/GalacticRepublic')

' renders the element
GalacticRepublic('GalacticRepublic', 'Galactic Republic', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element GalacticRepublic
include('fontawesome/Brands/GalacticRepublic')

' renders the element
GalacticRepublic('GalacticRepublic', 'Galactic Republic', 'an optional tech label', 'an optional description')
@enduml
```

