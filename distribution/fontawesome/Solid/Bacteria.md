# Bacteria


```text
fontawesome/Solid/Bacteria
```

```text
include('fontawesome/Solid/Bacteria')
```



| Illustration | Bacteria |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Bacteria.png) | ![illustration for Bacteria](../../fontawesome/Solid/Bacteria.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BacteriaXs>`
- `<$BacteriaSm>`
- `<$BacteriaMd>`
- `<$BacteriaLg>`





## Bacteria

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Bacteria
include('fontawesome/Solid/Bacteria')

' renders the element
Bacteria('Bacteria', 'Bacteria', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bacteria
include('fontawesome/Solid/Bacteria')

' renders the element
Bacteria('Bacteria', 'Bacteria', 'an optional tech label', 'an optional description')
@enduml
```

