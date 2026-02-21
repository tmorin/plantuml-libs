# BuildingNgo


```text
fontawesome/Solid/BuildingNgo
```

```text
include('fontawesome/Solid/BuildingNgo')
```



| Illustration | BuildingNgo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BuildingNgo.png) | ![illustration for BuildingNgo](../../fontawesome/Solid/BuildingNgo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BuildingNgoXs>`
- `<$BuildingNgoSm>`
- `<$BuildingNgoMd>`
- `<$BuildingNgoLg>`





## BuildingNgo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BuildingNgo
include('fontawesome/Solid/BuildingNgo')

' renders the element
BuildingNgo('BuildingNgo', 'Building Ngo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BuildingNgo
include('fontawesome/Solid/BuildingNgo')

' renders the element
BuildingNgo('BuildingNgo', 'Building Ngo', 'an optional tech label', 'an optional description')
@enduml
```

