# Scaleway


```text
simpleicons-8/S/Scaleway
```

```text
include('simpleicons-8/S/Scaleway')
```



| Illustration | Scaleway |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Scaleway.png) | ![illustration for Scaleway](../../simpleicons-8/S/Scaleway.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ScalewayXs>`
- `<$ScalewaySm>`
- `<$ScalewayMd>`
- `<$ScalewayLg>`





## Scaleway

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Scaleway
include('simpleicons-8/S/Scaleway')

' renders the element
Scaleway('Scaleway', 'Scaleway', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Scaleway
include('simpleicons-8/S/Scaleway')

' renders the element
Scaleway('Scaleway', 'Scaleway', 'an optional tech label', 'an optional description')
@enduml
```

