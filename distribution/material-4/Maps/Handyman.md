# Handyman


```text
material-4/Maps/Handyman
```

```text
include('material-4/Maps/Handyman')
```



| Illustration | Handyman |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/Handyman.png) | ![illustration for Handyman](../../material-4/Maps/Handyman.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandymanXs>`
- `<$HandymanSm>`
- `<$HandymanMd>`
- `<$HandymanLg>`





## Handyman

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Handyman
include('material-4/Maps/Handyman')

' renders the element
Handyman('Handyman', 'Handyman', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Handyman
include('material-4/Maps/Handyman')

' renders the element
Handyman('Handyman', 'Handyman', 'an optional tech label', 'an optional description')
@enduml
```

