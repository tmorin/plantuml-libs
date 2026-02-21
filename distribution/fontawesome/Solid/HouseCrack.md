# HouseCrack


```text
fontawesome/Solid/HouseCrack
```

```text
include('fontawesome/Solid/HouseCrack')
```



| Illustration | HouseCrack |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HouseCrack.png) | ![illustration for HouseCrack](../../fontawesome/Solid/HouseCrack.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HouseCrackXs>`
- `<$HouseCrackSm>`
- `<$HouseCrackMd>`
- `<$HouseCrackLg>`





## HouseCrack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HouseCrack
include('fontawesome/Solid/HouseCrack')

' renders the element
HouseCrack('HouseCrack', 'House Crack', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HouseCrack
include('fontawesome/Solid/HouseCrack')

' renders the element
HouseCrack('HouseCrack', 'House Crack', 'an optional tech label', 'an optional description')
@enduml
```

