# Motorcycle


```text
fontawesome/Solid/Motorcycle
```

```text
include('fontawesome/Solid/Motorcycle')
```



| Illustration | Motorcycle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Motorcycle.png) | ![illustration for Motorcycle](../../fontawesome/Solid/Motorcycle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MotorcycleXs>`
- `<$MotorcycleSm>`
- `<$MotorcycleMd>`
- `<$MotorcycleLg>`





## Motorcycle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Motorcycle
include('fontawesome/Solid/Motorcycle')

' renders the element
Motorcycle('Motorcycle', 'Motorcycle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Motorcycle
include('fontawesome/Solid/Motorcycle')

' renders the element
Motorcycle('Motorcycle', 'Motorcycle', 'an optional tech label', 'an optional description')
@enduml
```

