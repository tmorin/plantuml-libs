# Shelly


```text
simpleicons-14/S/Shelly
```

```text
include('simpleicons-14/S/Shelly')
```



| Illustration | Shelly |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Shelly.png) | ![illustration for Shelly](../../simpleicons-14/S/Shelly.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShellyXs>`
- `<$ShellySm>`
- `<$ShellyMd>`
- `<$ShellyLg>`





## Shelly

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Shelly
include('simpleicons-14/S/Shelly')

' renders the element
Shelly('Shelly', 'Shelly', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Shelly
include('simpleicons-14/S/Shelly')

' renders the element
Shelly('Shelly', 'Shelly', 'an optional tech label', 'an optional description')
@enduml
```

