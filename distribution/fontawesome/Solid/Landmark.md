# Landmark


```text
fontawesome/Solid/Landmark
```

```text
include('fontawesome/Solid/Landmark')
```



| Illustration | Landmark |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Landmark.png) | ![illustration for Landmark](../../fontawesome/Solid/Landmark.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LandmarkXs>`
- `<$LandmarkSm>`
- `<$LandmarkMd>`
- `<$LandmarkLg>`





## Landmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Landmark
include('fontawesome/Solid/Landmark')

' renders the element
Landmark('Landmark', 'Landmark', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Landmark
include('fontawesome/Solid/Landmark')

' renders the element
Landmark('Landmark', 'Landmark', 'an optional tech label', 'an optional description')
@enduml
```

