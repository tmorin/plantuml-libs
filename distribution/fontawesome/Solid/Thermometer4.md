# Thermometer4


```text
fontawesome/Solid/Thermometer4
```

```text
include('fontawesome/Solid/Thermometer4')
```



| Illustration | Thermometer4 |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Thermometer4.png) | ![illustration for Thermometer4](../../fontawesome/Solid/Thermometer4.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Thermometer4Xs>`
- `<$Thermometer4Sm>`
- `<$Thermometer4Md>`
- `<$Thermometer4Lg>`





## Thermometer4

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Thermometer4
include('fontawesome/Solid/Thermometer4')

' renders the element
Thermometer4('Thermometer4', 'Thermometer4', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Thermometer4
include('fontawesome/Solid/Thermometer4')

' renders the element
Thermometer4('Thermometer4', 'Thermometer4', 'an optional tech label', 'an optional description')
@enduml
```

