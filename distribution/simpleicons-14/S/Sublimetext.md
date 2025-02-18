# Sublimetext


```text
simpleicons-14/S/Sublimetext
```

```text
include('simpleicons-14/S/Sublimetext')
```



| Illustration | Sublimetext |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Sublimetext.png) | ![illustration for Sublimetext](../../simpleicons-14/S/Sublimetext.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SublimetextXs>`
- `<$SublimetextSm>`
- `<$SublimetextMd>`
- `<$SublimetextLg>`





## Sublimetext

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sublimetext
include('simpleicons-14/S/Sublimetext')

' renders the element
Sublimetext('Sublimetext', 'Sublimetext', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sublimetext
include('simpleicons-14/S/Sublimetext')

' renders the element
Sublimetext('Sublimetext', 'Sublimetext', 'an optional tech label', 'an optional description')
@enduml
```

