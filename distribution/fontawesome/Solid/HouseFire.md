# HouseFire


```text
fontawesome/Solid/HouseFire
```

```text
include('fontawesome/Solid/HouseFire')
```



| Illustration | HouseFire |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HouseFire.png) | ![illustration for HouseFire](../../fontawesome/Solid/HouseFire.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HouseFireXs>`
- `<$HouseFireSm>`
- `<$HouseFireMd>`
- `<$HouseFireLg>`





## HouseFire

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HouseFire
include('fontawesome/Solid/HouseFire')

' renders the element
HouseFire('HouseFire', 'House Fire', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HouseFire
include('fontawesome/Solid/HouseFire')

' renders the element
HouseFire('HouseFire', 'House Fire', 'an optional tech label', 'an optional description')
@enduml
```

