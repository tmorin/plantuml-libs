# Plesk


```text
simpleicons/P/Plesk
```

```text
include('simpleicons/P/Plesk')
```



| Illustration | Plesk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Plesk.png) | ![illustration for Plesk](../../simpleicons/P/Plesk.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PleskXs>`
- `<$PleskSm>`
- `<$PleskMd>`
- `<$PleskLg>`





## Plesk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Plesk
include('simpleicons/P/Plesk')

' renders the element
Plesk('Plesk', 'Plesk', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Plesk
include('simpleicons/P/Plesk')

' renders the element
Plesk('Plesk', 'Plesk', 'an optional tech label', 'an optional description')
@enduml
```

