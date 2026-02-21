# Tooth


```text
fontawesome/Solid/Tooth
```

```text
include('fontawesome/Solid/Tooth')
```



| Illustration | Tooth |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Tooth.png) | ![illustration for Tooth](../../fontawesome/Solid/Tooth.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ToothXs>`
- `<$ToothSm>`
- `<$ToothMd>`
- `<$ToothLg>`





## Tooth

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Tooth
include('fontawesome/Solid/Tooth')

' renders the element
Tooth('Tooth', 'Tooth', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tooth
include('fontawesome/Solid/Tooth')

' renders the element
Tooth('Tooth', 'Tooth', 'an optional tech label', 'an optional description')
@enduml
```

