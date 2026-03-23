# Thermometer3


```text
fontawesome/Solid/Thermometer3
```

```text
include('fontawesome/Solid/Thermometer3')
```



| Illustration | Thermometer3 |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Thermometer3.png) | ![illustration for Thermometer3](../../fontawesome/Solid/Thermometer3.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Thermometer3Xs>`
- `<$Thermometer3Sm>`
- `<$Thermometer3Md>`
- `<$Thermometer3Lg>`





## Thermometer3

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Thermometer3
include('fontawesome/Solid/Thermometer3')

' renders the element
Thermometer3('Thermometer3', 'Thermometer3', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Thermometer3
include('fontawesome/Solid/Thermometer3')

' renders the element
Thermometer3('Thermometer3', 'Thermometer3', 'an optional tech label', 'an optional description')
@enduml
```

