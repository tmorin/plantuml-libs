# Synology


```text
simpleicons-14/S/Synology
```

```text
include('simpleicons-14/S/Synology')
```



| Illustration | Synology |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Synology.png) | ![illustration for Synology](../../simpleicons-14/S/Synology.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SynologyXs>`
- `<$SynologySm>`
- `<$SynologyMd>`
- `<$SynologyLg>`





## Synology

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Synology
include('simpleicons-14/S/Synology')

' renders the element
Synology('Synology', 'Synology', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Synology
include('simpleicons-14/S/Synology')

' renders the element
Synology('Synology', 'Synology', 'an optional tech label', 'an optional description')
@enduml
```

