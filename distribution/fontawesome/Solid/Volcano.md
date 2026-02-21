# Volcano


```text
fontawesome/Solid/Volcano
```

```text
include('fontawesome/Solid/Volcano')
```



| Illustration | Volcano |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Volcano.png) | ![illustration for Volcano](../../fontawesome/Solid/Volcano.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VolcanoXs>`
- `<$VolcanoSm>`
- `<$VolcanoMd>`
- `<$VolcanoLg>`





## Volcano

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Volcano
include('fontawesome/Solid/Volcano')

' renders the element
Volcano('Volcano', 'Volcano', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Volcano
include('fontawesome/Solid/Volcano')

' renders the element
Volcano('Volcano', 'Volcano', 'an optional tech label', 'an optional description')
@enduml
```

