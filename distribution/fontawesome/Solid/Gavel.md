# Gavel


```text
fontawesome/Solid/Gavel
```

```text
include('fontawesome/Solid/Gavel')
```



| Illustration | Gavel |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Gavel.png) | ![illustration for Gavel](../../fontawesome/Solid/Gavel.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GavelXs>`
- `<$GavelSm>`
- `<$GavelMd>`
- `<$GavelLg>`





## Gavel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Gavel
include('fontawesome/Solid/Gavel')

' renders the element
Gavel('Gavel', 'Gavel', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gavel
include('fontawesome/Solid/Gavel')

' renders the element
Gavel('Gavel', 'Gavel', 'an optional tech label', 'an optional description')
@enduml
```

