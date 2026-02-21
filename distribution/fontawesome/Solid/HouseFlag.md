# HouseFlag


```text
fontawesome/Solid/HouseFlag
```

```text
include('fontawesome/Solid/HouseFlag')
```



| Illustration | HouseFlag |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HouseFlag.png) | ![illustration for HouseFlag](../../fontawesome/Solid/HouseFlag.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HouseFlagXs>`
- `<$HouseFlagSm>`
- `<$HouseFlagMd>`
- `<$HouseFlagLg>`





## HouseFlag

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HouseFlag
include('fontawesome/Solid/HouseFlag')

' renders the element
HouseFlag('HouseFlag', 'House Flag', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HouseFlag
include('fontawesome/Solid/HouseFlag')

' renders the element
HouseFlag('HouseFlag', 'House Flag', 'an optional tech label', 'an optional description')
@enduml
```

