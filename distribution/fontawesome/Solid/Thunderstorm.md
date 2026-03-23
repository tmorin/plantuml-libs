# Thunderstorm


```text
fontawesome/Solid/Thunderstorm
```

```text
include('fontawesome/Solid/Thunderstorm')
```



| Illustration | Thunderstorm |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Thunderstorm.png) | ![illustration for Thunderstorm](../../fontawesome/Solid/Thunderstorm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThunderstormXs>`
- `<$ThunderstormSm>`
- `<$ThunderstormMd>`
- `<$ThunderstormLg>`





## Thunderstorm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Thunderstorm
include('fontawesome/Solid/Thunderstorm')

' renders the element
Thunderstorm('Thunderstorm', 'Thunderstorm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Thunderstorm
include('fontawesome/Solid/Thunderstorm')

' renders the element
Thunderstorm('Thunderstorm', 'Thunderstorm', 'an optional tech label', 'an optional description')
@enduml
```

