# Anydesk


```text
simpleicons-8/A/Anydesk
```

```text
include('simpleicons-8/A/Anydesk')
```



| Illustration | Anydesk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Anydesk.png) | ![illustration for Anydesk](../../simpleicons-8/A/Anydesk.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AnydeskXs>`
- `<$AnydeskSm>`
- `<$AnydeskMd>`
- `<$AnydeskLg>`





## Anydesk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Anydesk
include('simpleicons-8/A/Anydesk')

' renders the element
Anydesk('Anydesk', 'Anydesk', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Anydesk
include('simpleicons-8/A/Anydesk')

' renders the element
Anydesk('Anydesk', 'Anydesk', 'an optional tech label', 'an optional description')
@enduml
```

