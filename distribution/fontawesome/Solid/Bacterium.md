# Bacterium


```text
fontawesome/Solid/Bacterium
```

```text
include('fontawesome/Solid/Bacterium')
```



| Illustration | Bacterium |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Bacterium.png) | ![illustration for Bacterium](../../fontawesome/Solid/Bacterium.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BacteriumXs>`
- `<$BacteriumSm>`
- `<$BacteriumMd>`
- `<$BacteriumLg>`





## Bacterium

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Bacterium
include('fontawesome/Solid/Bacterium')

' renders the element
Bacterium('Bacterium', 'Bacterium', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bacterium
include('fontawesome/Solid/Bacterium')

' renders the element
Bacterium('Bacterium', 'Bacterium', 'an optional tech label', 'an optional description')
@enduml
```

