# Rustdesk


```text
simpleicons/R/Rustdesk
```

```text
include('simpleicons/R/Rustdesk')
```



| Illustration | Rustdesk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Rustdesk.png) | ![illustration for Rustdesk](../../simpleicons/R/Rustdesk.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RustdeskXs>`
- `<$RustdeskSm>`
- `<$RustdeskMd>`
- `<$RustdeskLg>`





## Rustdesk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Rustdesk
include('simpleicons/R/Rustdesk')

' renders the element
Rustdesk('Rustdesk', 'Rustdesk', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rustdesk
include('simpleicons/R/Rustdesk')

' renders the element
Rustdesk('Rustdesk', 'Rustdesk', 'an optional tech label', 'an optional description')
@enduml
```

