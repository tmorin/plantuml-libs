# HospitalWide


```text
fontawesome/Regular/HospitalWide
```

```text
include('fontawesome/Regular/HospitalWide')
```



| Illustration | HospitalWide |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/HospitalWide.png) | ![illustration for HospitalWide](../../fontawesome/Regular/HospitalWide.Local.png) |



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
include('fontawesome/Regular/HospitalWide')

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
include('fontawesome/Regular/HospitalWide')

' renders the element
HospitalWide('HospitalWide', 'Hospital Wide', 'an optional tech label', 'an optional description')
@enduml
```

