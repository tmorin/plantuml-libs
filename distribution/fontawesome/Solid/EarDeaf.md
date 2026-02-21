# EarDeaf


```text
fontawesome/Solid/EarDeaf
```

```text
include('fontawesome/Solid/EarDeaf')
```



| Illustration | EarDeaf |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/EarDeaf.png) | ![illustration for EarDeaf](../../fontawesome/Solid/EarDeaf.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EarDeafXs>`
- `<$EarDeafSm>`
- `<$EarDeafMd>`
- `<$EarDeafLg>`





## EarDeaf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element EarDeaf
include('fontawesome/Solid/EarDeaf')

' renders the element
EarDeaf('EarDeaf', 'Ear Deaf', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element EarDeaf
include('fontawesome/Solid/EarDeaf')

' renders the element
EarDeaf('EarDeaf', 'Ear Deaf', 'an optional tech label', 'an optional description')
@enduml
```

