# GlobeOceania


```text
fontawesome/Solid/GlobeOceania
```

```text
include('fontawesome/Solid/GlobeOceania')
```



| Illustration | GlobeOceania |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/GlobeOceania.png) | ![illustration for GlobeOceania](../../fontawesome/Solid/GlobeOceania.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GlobeOceaniaXs>`
- `<$GlobeOceaniaSm>`
- `<$GlobeOceaniaMd>`
- `<$GlobeOceaniaLg>`





## GlobeOceania

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GlobeOceania
include('fontawesome/Solid/GlobeOceania')

' renders the element
GlobeOceania('GlobeOceania', 'Globe Oceania', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GlobeOceania
include('fontawesome/Solid/GlobeOceania')

' renders the element
GlobeOceania('GlobeOceania', 'Globe Oceania', 'an optional tech label', 'an optional description')
@enduml
```

