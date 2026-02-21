# Telequebec


```text
simpleicons/T/Telequebec
```

```text
include('simpleicons/T/Telequebec')
```



| Illustration | Telequebec |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Telequebec.png) | ![illustration for Telequebec](../../simpleicons/T/Telequebec.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TelequebecXs>`
- `<$TelequebecSm>`
- `<$TelequebecMd>`
- `<$TelequebecLg>`





## Telequebec

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Telequebec
include('simpleicons/T/Telequebec')

' renders the element
Telequebec('Telequebec', 'Telequebec', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Telequebec
include('simpleicons/T/Telequebec')

' renders the element
Telequebec('Telequebec', 'Telequebec', 'an optional tech label', 'an optional description')
@enduml
```

