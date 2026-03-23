# HospitalWide


```text
fontawesome/Solid/HospitalWide
```

```text
include('fontawesome/Solid/HospitalWide')
```



| Illustration | HospitalWide |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HospitalWide.png) | ![illustration for HospitalWide](../../fontawesome/Solid/HospitalWide.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HospitalWideXs>`
- `<$HospitalWideSm>`
- `<$HospitalWideMd>`
- `<$HospitalWideLg>`





## HospitalWide

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HospitalWide
include('fontawesome/Solid/HospitalWide')

' renders the element
HospitalWide('HospitalWide', 'Hospital Wide', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HospitalWide
include('fontawesome/Solid/HospitalWide')

' renders the element
HospitalWide('HospitalWide', 'Hospital Wide', 'an optional tech label', 'an optional description')
@enduml
```

