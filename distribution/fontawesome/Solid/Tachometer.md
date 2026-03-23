# Tachometer


```text
fontawesome/Solid/Tachometer
```

```text
include('fontawesome/Solid/Tachometer')
```



| Illustration | Tachometer |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Tachometer.png) | ![illustration for Tachometer](../../fontawesome/Solid/Tachometer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TachometerXs>`
- `<$TachometerSm>`
- `<$TachometerMd>`
- `<$TachometerLg>`





## Tachometer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Tachometer
include('fontawesome/Solid/Tachometer')

' renders the element
Tachometer('Tachometer', 'Tachometer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tachometer
include('fontawesome/Solid/Tachometer')

' renders the element
Tachometer('Tachometer', 'Tachometer', 'an optional tech label', 'an optional description')
@enduml
```

