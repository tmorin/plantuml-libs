# CircleRadiation


```text
fontawesome-6/Solid/CircleRadiation
```

```text
include('fontawesome-6/Solid/CircleRadiation')
```



| Illustration | CircleRadiation |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CircleRadiation.png) | ![illustration for CircleRadiation](../../fontawesome-6/Solid/CircleRadiation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CircleRadiationXs>`
- `<$CircleRadiationSm>`
- `<$CircleRadiationMd>`
- `<$CircleRadiationLg>`





## CircleRadiation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CircleRadiation
include('fontawesome-6/Solid/CircleRadiation')

' renders the element
CircleRadiation('CircleRadiation', 'Circle Radiation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CircleRadiation
include('fontawesome-6/Solid/CircleRadiation')

' renders the element
CircleRadiation('CircleRadiation', 'Circle Radiation', 'an optional tech label', 'an optional description')
@enduml
```

