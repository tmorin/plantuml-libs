# Skynet


```text
simpleicons-14/S/Skynet
```

```text
include('simpleicons-14/S/Skynet')
```



| Illustration | Skynet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Skynet.png) | ![illustration for Skynet](../../simpleicons-14/S/Skynet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SkynetXs>`
- `<$SkynetSm>`
- `<$SkynetMd>`
- `<$SkynetLg>`





## Skynet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Skynet
include('simpleicons-14/S/Skynet')

' renders the element
Skynet('Skynet', 'Skynet', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Skynet
include('simpleicons-14/S/Skynet')

' renders the element
Skynet('Skynet', 'Skynet', 'an optional tech label', 'an optional description')
@enduml
```

