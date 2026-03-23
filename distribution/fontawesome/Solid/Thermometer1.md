# Thermometer1


```text
fontawesome/Solid/Thermometer1
```

```text
include('fontawesome/Solid/Thermometer1')
```



| Illustration | Thermometer1 |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Thermometer1.png) | ![illustration for Thermometer1](../../fontawesome/Solid/Thermometer1.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Thermometer1Xs>`
- `<$Thermometer1Sm>`
- `<$Thermometer1Md>`
- `<$Thermometer1Lg>`





## Thermometer1

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Thermometer1
include('fontawesome/Solid/Thermometer1')

' renders the element
Thermometer1('Thermometer1', 'Thermometer1', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Thermometer1
include('fontawesome/Solid/Thermometer1')

' renders the element
Thermometer1('Thermometer1', 'Thermometer1', 'an optional tech label', 'an optional description')
@enduml
```

