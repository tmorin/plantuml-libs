# GlobeAfrica


```text
fontawesome/Solid/GlobeAfrica
```

```text
include('fontawesome/Solid/GlobeAfrica')
```



| Illustration | GlobeAfrica |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/GlobeAfrica.png) | ![illustration for GlobeAfrica](../../fontawesome/Solid/GlobeAfrica.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GlobeAfricaXs>`
- `<$GlobeAfricaSm>`
- `<$GlobeAfricaMd>`
- `<$GlobeAfricaLg>`





## GlobeAfrica

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GlobeAfrica
include('fontawesome/Solid/GlobeAfrica')

' renders the element
GlobeAfrica('GlobeAfrica', 'Globe Africa', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GlobeAfrica
include('fontawesome/Solid/GlobeAfrica')

' renders the element
GlobeAfrica('GlobeAfrica', 'Globe Africa', 'an optional tech label', 'an optional description')
@enduml
```

