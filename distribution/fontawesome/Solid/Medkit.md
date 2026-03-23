# Medkit


```text
fontawesome/Solid/Medkit
```

```text
include('fontawesome/Solid/Medkit')
```



| Illustration | Medkit |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Medkit.png) | ![illustration for Medkit](../../fontawesome/Solid/Medkit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MedkitXs>`
- `<$MedkitSm>`
- `<$MedkitMd>`
- `<$MedkitLg>`





## Medkit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Medkit
include('fontawesome/Solid/Medkit')

' renders the element
Medkit('Medkit', 'Medkit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Medkit
include('fontawesome/Solid/Medkit')

' renders the element
Medkit('Medkit', 'Medkit', 'an optional tech label', 'an optional description')
@enduml
```

