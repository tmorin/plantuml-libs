# Plumbing


```text
material/Maps/Plumbing
```

```text
include('material/Maps/Plumbing')
```



| Illustration | Plumbing |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/Plumbing.png) | ![illustration for Plumbing](../../material/Maps/Plumbing.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlumbingXs>`
- `<$PlumbingSm>`
- `<$PlumbingMd>`
- `<$PlumbingLg>`





## Plumbing

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Plumbing
include('material/Maps/Plumbing')

' renders the element
Plumbing('Plumbing', 'Plumbing', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Plumbing
include('material/Maps/Plumbing')

' renders the element
Plumbing('Plumbing', 'Plumbing', 'an optional tech label', 'an optional description')
@enduml
```

