# Scorpio


```text
fontawesome/Solid/Scorpio
```

```text
include('fontawesome/Solid/Scorpio')
```



| Illustration | Scorpio |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Scorpio.png) | ![illustration for Scorpio](../../fontawesome/Solid/Scorpio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ScorpioXs>`
- `<$ScorpioSm>`
- `<$ScorpioMd>`
- `<$ScorpioLg>`





## Scorpio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Scorpio
include('fontawesome/Solid/Scorpio')

' renders the element
Scorpio('Scorpio', 'Scorpio', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Scorpio
include('fontawesome/Solid/Scorpio')

' renders the element
Scorpio('Scorpio', 'Scorpio', 'an optional tech label', 'an optional description')
@enduml
```

