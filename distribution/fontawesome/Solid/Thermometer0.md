# Thermometer0


```text
fontawesome/Solid/Thermometer0
```

```text
include('fontawesome/Solid/Thermometer0')
```



| Illustration | Thermometer0 |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Thermometer0.png) | ![illustration for Thermometer0](../../fontawesome/Solid/Thermometer0.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Thermometer0Xs>`
- `<$Thermometer0Sm>`
- `<$Thermometer0Md>`
- `<$Thermometer0Lg>`





## Thermometer0

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Thermometer0
include('fontawesome/Solid/Thermometer0')

' renders the element
Thermometer0('Thermometer0', 'Thermometer0', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Thermometer0
include('fontawesome/Solid/Thermometer0')

' renders the element
Thermometer0('Thermometer0', 'Thermometer0', 'an optional tech label', 'an optional description')
@enduml
```

