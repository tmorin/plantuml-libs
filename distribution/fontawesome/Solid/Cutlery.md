# Cutlery


```text
fontawesome/Solid/Cutlery
```

```text
include('fontawesome/Solid/Cutlery')
```



| Illustration | Cutlery |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Cutlery.png) | ![illustration for Cutlery](../../fontawesome/Solid/Cutlery.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CutleryXs>`
- `<$CutlerySm>`
- `<$CutleryMd>`
- `<$CutleryLg>`





## Cutlery

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Cutlery
include('fontawesome/Solid/Cutlery')

' renders the element
Cutlery('Cutlery', 'Cutlery', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cutlery
include('fontawesome/Solid/Cutlery')

' renders the element
Cutlery('Cutlery', 'Cutlery', 'an optional tech label', 'an optional description')
@enduml
```

