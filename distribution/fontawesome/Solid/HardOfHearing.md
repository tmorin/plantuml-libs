# HardOfHearing


```text
fontawesome/Solid/HardOfHearing
```

```text
include('fontawesome/Solid/HardOfHearing')
```



| Illustration | HardOfHearing |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HardOfHearing.png) | ![illustration for HardOfHearing](../../fontawesome/Solid/HardOfHearing.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HardOfHearingXs>`
- `<$HardOfHearingSm>`
- `<$HardOfHearingMd>`
- `<$HardOfHearingLg>`





## HardOfHearing

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HardOfHearing
include('fontawesome/Solid/HardOfHearing')

' renders the element
HardOfHearing('HardOfHearing', 'Hard Of Hearing', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HardOfHearing
include('fontawesome/Solid/HardOfHearing')

' renders the element
HardOfHearing('HardOfHearing', 'Hard Of Hearing', 'an optional tech label', 'an optional description')
@enduml
```

