# Sway


```text
simpleicons-14/S/Sway
```

```text
include('simpleicons-14/S/Sway')
```



| Illustration | Sway |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Sway.png) | ![illustration for Sway](../../simpleicons-14/S/Sway.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SwayXs>`
- `<$SwaySm>`
- `<$SwayMd>`
- `<$SwayLg>`





## Sway

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sway
include('simpleicons-14/S/Sway')

' renders the element
Sway('Sway', 'Sway', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sway
include('simpleicons-14/S/Sway')

' renders the element
Sway('Sway', 'Sway', 'an optional tech label', 'an optional description')
@enduml
```

