# HouseChimney


```text
fontawesome/Solid/HouseChimney
```

```text
include('fontawesome/Solid/HouseChimney')
```



| Illustration | HouseChimney |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HouseChimney.png) | ![illustration for HouseChimney](../../fontawesome/Solid/HouseChimney.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HouseChimneyXs>`
- `<$HouseChimneySm>`
- `<$HouseChimneyMd>`
- `<$HouseChimneyLg>`





## HouseChimney

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HouseChimney
include('fontawesome/Solid/HouseChimney')

' renders the element
HouseChimney('HouseChimney', 'House Chimney', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HouseChimney
include('fontawesome/Solid/HouseChimney')

' renders the element
HouseChimney('HouseChimney', 'House Chimney', 'an optional tech label', 'an optional description')
@enduml
```

