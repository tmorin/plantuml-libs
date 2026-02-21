# HouseCircleCheck


```text
fontawesome/Solid/HouseCircleCheck
```

```text
include('fontawesome/Solid/HouseCircleCheck')
```



| Illustration | HouseCircleCheck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HouseCircleCheck.png) | ![illustration for HouseCircleCheck](../../fontawesome/Solid/HouseCircleCheck.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HouseCircleCheckXs>`
- `<$HouseCircleCheckSm>`
- `<$HouseCircleCheckMd>`
- `<$HouseCircleCheckLg>`





## HouseCircleCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HouseCircleCheck
include('fontawesome/Solid/HouseCircleCheck')

' renders the element
HouseCircleCheck('HouseCircleCheck', 'House Circle Check', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HouseCircleCheck
include('fontawesome/Solid/HouseCircleCheck')

' renders the element
HouseCircleCheck('HouseCircleCheck', 'House Circle Check', 'an optional tech label', 'an optional description')
@enduml
```

