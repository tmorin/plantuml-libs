# VolunteerActivism


```text
material/Maps/VolunteerActivism
```

```text
include('material/Maps/VolunteerActivism')
```



| Illustration | VolunteerActivism |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/VolunteerActivism.png) | ![illustration for VolunteerActivism](../../material/Maps/VolunteerActivism.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VolunteerActivismXs>`
- `<$VolunteerActivismSm>`
- `<$VolunteerActivismMd>`
- `<$VolunteerActivismLg>`





## VolunteerActivism

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element VolunteerActivism
include('material/Maps/VolunteerActivism')

' renders the element
VolunteerActivism('VolunteerActivism', 'Volunteer Activism', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element VolunteerActivism
include('material/Maps/VolunteerActivism')

' renders the element
VolunteerActivism('VolunteerActivism', 'Volunteer Activism', 'an optional tech label', 'an optional description')
@enduml
```

