# HouseCircleExclamation


```text
fontawesome-6/Solid/HouseCircleExclamation
```

```text
include('fontawesome-6/Solid/HouseCircleExclamation')
```



| Illustration | HouseCircleExclamation |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HouseCircleExclamation.png) | ![illustration for HouseCircleExclamation](../../fontawesome-6/Solid/HouseCircleExclamation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HouseCircleExclamationXs>`
- `<$HouseCircleExclamationSm>`
- `<$HouseCircleExclamationMd>`
- `<$HouseCircleExclamationLg>`





## HouseCircleExclamation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HouseCircleExclamation
include('fontawesome-6/Solid/HouseCircleExclamation')

' renders the element
HouseCircleExclamation('HouseCircleExclamation', 'House Circle Exclamation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HouseCircleExclamation
include('fontawesome-6/Solid/HouseCircleExclamation')

' renders the element
HouseCircleExclamation('HouseCircleExclamation', 'House Circle Exclamation', 'an optional tech label', 'an optional description')
@enduml
```

