# Moped


```text
material/Maps/Moped
```

```text
include('material/Maps/Moped')
```



| Illustration | Moped |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/Moped.png) | ![illustration for Moped](../../material/Maps/Moped.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MopedXs>`
- `<$MopedSm>`
- `<$MopedMd>`
- `<$MopedLg>`





## Moped

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Moped
include('material/Maps/Moped')

' renders the element
Moped('Moped', 'Moped', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Moped
include('material/Maps/Moped')

' renders the element
Moped('Moped', 'Moped', 'an optional tech label', 'an optional description')
@enduml
```

