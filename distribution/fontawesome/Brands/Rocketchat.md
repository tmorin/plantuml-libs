# Rocketchat


```text
fontawesome/Brands/Rocketchat
```

```text
include('fontawesome/Brands/Rocketchat')
```



| Illustration | Rocketchat |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Rocketchat.png) | ![illustration for Rocketchat](../../fontawesome/Brands/Rocketchat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RocketchatXs>`
- `<$RocketchatSm>`
- `<$RocketchatMd>`
- `<$RocketchatLg>`





## Rocketchat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Rocketchat
include('fontawesome/Brands/Rocketchat')

' renders the element
Rocketchat('Rocketchat', 'Rocketchat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rocketchat
include('fontawesome/Brands/Rocketchat')

' renders the element
Rocketchat('Rocketchat', 'Rocketchat', 'an optional tech label', 'an optional description')
@enduml
```

