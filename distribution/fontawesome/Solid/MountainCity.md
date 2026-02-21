# MountainCity


```text
fontawesome/Solid/MountainCity
```

```text
include('fontawesome/Solid/MountainCity')
```



| Illustration | MountainCity |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MountainCity.png) | ![illustration for MountainCity](../../fontawesome/Solid/MountainCity.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MountainCityXs>`
- `<$MountainCitySm>`
- `<$MountainCityMd>`
- `<$MountainCityLg>`





## MountainCity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MountainCity
include('fontawesome/Solid/MountainCity')

' renders the element
MountainCity('MountainCity', 'Mountain City', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MountainCity
include('fontawesome/Solid/MountainCity')

' renders the element
MountainCity('MountainCity', 'Mountain City', 'an optional tech label', 'an optional description')
@enduml
```

