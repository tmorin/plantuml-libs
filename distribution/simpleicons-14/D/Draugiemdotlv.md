# Draugiemdotlv


```text
simpleicons-14/D/Draugiemdotlv
```

```text
include('simpleicons-14/D/Draugiemdotlv')
```



| Illustration | Draugiemdotlv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Draugiemdotlv.png) | ![illustration for Draugiemdotlv](../../simpleicons-14/D/Draugiemdotlv.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DraugiemdotlvXs>`
- `<$DraugiemdotlvSm>`
- `<$DraugiemdotlvMd>`
- `<$DraugiemdotlvLg>`





## Draugiemdotlv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Draugiemdotlv
include('simpleicons-14/D/Draugiemdotlv')

' renders the element
Draugiemdotlv('Draugiemdotlv', 'Draugiemdotlv', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Draugiemdotlv
include('simpleicons-14/D/Draugiemdotlv')

' renders the element
Draugiemdotlv('Draugiemdotlv', 'Draugiemdotlv', 'an optional tech label', 'an optional description')
@enduml
```

