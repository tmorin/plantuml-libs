# Mullvad


```text
simpleicons-14/M/Mullvad
```

```text
include('simpleicons-14/M/Mullvad')
```



| Illustration | Mullvad |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Mullvad.png) | ![illustration for Mullvad](../../simpleicons-14/M/Mullvad.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MullvadXs>`
- `<$MullvadSm>`
- `<$MullvadMd>`
- `<$MullvadLg>`





## Mullvad

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mullvad
include('simpleicons-14/M/Mullvad')

' renders the element
Mullvad('Mullvad', 'Mullvad', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mullvad
include('simpleicons-14/M/Mullvad')

' renders the element
Mullvad('Mullvad', 'Mullvad', 'an optional tech label', 'an optional description')
@enduml
```

