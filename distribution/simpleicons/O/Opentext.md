# Opentext


```text
simpleicons/O/Opentext
```

```text
include('simpleicons/O/Opentext')
```



| Illustration | Opentext |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Opentext.png) | ![illustration for Opentext](../../simpleicons/O/Opentext.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpentextXs>`
- `<$OpentextSm>`
- `<$OpentextMd>`
- `<$OpentextLg>`





## Opentext

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Opentext
include('simpleicons/O/Opentext')

' renders the element
Opentext('Opentext', 'Opentext', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Opentext
include('simpleicons/O/Opentext')

' renders the element
Opentext('Opentext', 'Opentext', 'an optional tech label', 'an optional description')
@enduml
```

