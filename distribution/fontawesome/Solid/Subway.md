# Subway


```text
fontawesome/Solid/Subway
```

```text
include('fontawesome/Solid/Subway')
```



| Illustration | Subway |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Subway.png) | ![illustration for Subway](../../fontawesome/Solid/Subway.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SubwayXs>`
- `<$SubwaySm>`
- `<$SubwayMd>`
- `<$SubwayLg>`





## Subway

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Subway
include('fontawesome/Solid/Subway')

' renders the element
Subway('Subway', 'Subway', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Subway
include('fontawesome/Solid/Subway')

' renders the element
Subway('Subway', 'Subway', 'an optional tech label', 'an optional description')
@enduml
```

