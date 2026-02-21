# Biotech


```text
material/Content/Biotech
```

```text
include('material/Content/Biotech')
```



| Illustration | Biotech |
| :---: | :---: |
| ![illustration for Illustration](../../material/Content/Biotech.png) | ![illustration for Biotech](../../material/Content/Biotech.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BiotechXs>`
- `<$BiotechSm>`
- `<$BiotechMd>`
- `<$BiotechLg>`





## Biotech

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Biotech
include('material/Content/Biotech')

' renders the element
Biotech('Biotech', 'Biotech', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Biotech
include('material/Content/Biotech')

' renders the element
Biotech('Biotech', 'Biotech', 'an optional tech label', 'an optional description')
@enduml
```

