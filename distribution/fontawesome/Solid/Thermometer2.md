# Thermometer2


```text
fontawesome/Solid/Thermometer2
```

```text
include('fontawesome/Solid/Thermometer2')
```



| Illustration | Thermometer2 |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Thermometer2.png) | ![illustration for Thermometer2](../../fontawesome/Solid/Thermometer2.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Thermometer2Xs>`
- `<$Thermometer2Sm>`
- `<$Thermometer2Md>`
- `<$Thermometer2Lg>`





## Thermometer2

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Thermometer2
include('fontawesome/Solid/Thermometer2')

' renders the element
Thermometer2('Thermometer2', 'Thermometer2', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Thermometer2
include('fontawesome/Solid/Thermometer2')

' renders the element
Thermometer2('Thermometer2', 'Thermometer2', 'an optional tech label', 'an optional description')
@enduml
```

