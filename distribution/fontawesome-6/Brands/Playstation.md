# Playstation


```text
fontawesome-6/Brands/Playstation
```

```text
include('fontawesome-6/Brands/Playstation')
```



| Illustration | Playstation |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Playstation.png) | ![illustration for Playstation](../../fontawesome-6/Brands/Playstation.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Playstation
include('fontawesome-6/Brands/Playstation')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Playstation
include('fontawesome-6/Brands/Playstation')

' renders the element
Playstation('Playstation', 'Playstation', 'an optional tech label', 'an optional description')
@enduml
```

