# Mapillary


```text
simpleicons-14/M/Mapillary
```

```text
include('simpleicons-14/M/Mapillary')
```



| Illustration | Mapillary |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Mapillary.png) | ![illustration for Mapillary](../../simpleicons-14/M/Mapillary.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MapillaryXs>`
- `<$MapillarySm>`
- `<$MapillaryMd>`
- `<$MapillaryLg>`





## Mapillary

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mapillary
include('simpleicons-14/M/Mapillary')

' renders the element
Mapillary('Mapillary', 'Mapillary', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mapillary
include('simpleicons-14/M/Mapillary')

' renders the element
Mapillary('Mapillary', 'Mapillary', 'an optional tech label', 'an optional description')
@enduml
```

