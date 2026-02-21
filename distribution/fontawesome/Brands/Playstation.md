# Playstation


```text
fontawesome/Brands/Playstation
```

```text
include('fontawesome/Brands/Playstation')
```



| Illustration | Playstation |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Playstation.png) | ![illustration for Playstation](../../fontawesome/Brands/Playstation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlaystationXs>`
- `<$PlaystationSm>`
- `<$PlaystationMd>`
- `<$PlaystationLg>`





## Playstation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Playstation
include('fontawesome/Brands/Playstation')

' renders the element
Playstation('Playstation', 'Playstation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Playstation
include('fontawesome/Brands/Playstation')

' renders the element
Playstation('Playstation', 'Playstation', 'an optional tech label', 'an optional description')
@enduml
```

