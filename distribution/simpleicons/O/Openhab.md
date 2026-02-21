# Openhab


```text
simpleicons/O/Openhab
```

```text
include('simpleicons/O/Openhab')
```



| Illustration | Openhab |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Openhab.png) | ![illustration for Openhab](../../simpleicons/O/Openhab.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpenhabXs>`
- `<$OpenhabSm>`
- `<$OpenhabMd>`
- `<$OpenhabLg>`





## Openhab

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Openhab
include('simpleicons/O/Openhab')

' renders the element
Openhab('Openhab', 'Openhab', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Openhab
include('simpleicons/O/Openhab')

' renders the element
Openhab('Openhab', 'Openhab', 'an optional tech label', 'an optional description')
@enduml
```

