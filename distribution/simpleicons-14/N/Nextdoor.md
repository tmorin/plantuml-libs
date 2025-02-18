# Nextdoor


```text
simpleicons-14/N/Nextdoor
```

```text
include('simpleicons-14/N/Nextdoor')
```



| Illustration | Nextdoor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Nextdoor.png) | ![illustration for Nextdoor](../../simpleicons-14/N/Nextdoor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NextdoorXs>`
- `<$NextdoorSm>`
- `<$NextdoorMd>`
- `<$NextdoorLg>`





## Nextdoor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Nextdoor
include('simpleicons-14/N/Nextdoor')

' renders the element
Nextdoor('Nextdoor', 'Nextdoor', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nextdoor
include('simpleicons-14/N/Nextdoor')

' renders the element
Nextdoor('Nextdoor', 'Nextdoor', 'an optional tech label', 'an optional description')
@enduml
```

