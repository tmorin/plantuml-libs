# BuildingNgo


```text
fontawesome-6/Solid/BuildingNgo
```

```text
include('fontawesome-6/Solid/BuildingNgo')
```



| Illustration | BuildingNgo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BuildingNgo.png) | ![illustration for BuildingNgo](../../fontawesome-6/Solid/BuildingNgo.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BuildingNgo
include('fontawesome-6/Solid/BuildingNgo')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BuildingNgo
include('fontawesome-6/Solid/BuildingNgo')

' renders the element
BuildingNgo('BuildingNgo', 'Building Ngo', 'an optional tech label', 'an optional description')
@enduml
```

