# Draugiemdotlv


```text
simpleicons-5/D/Draugiemdotlv
```

```text
include('simpleicons-5/D/Draugiemdotlv')
```



| Illustration | Draugiemdotlv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Draugiemdotlv.png) | ![illustration for Draugiemdotlv](../../simpleicons-5/D/Draugiemdotlv.Local.png) |




## Draugiemdotlv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Draugiemdotlv
include('simpleicons-5/D/Draugiemdotlv')

' renders the element
Draugiemdotlv('Draugiemdotlv', 'Draugiemdotlv', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Draugiemdotlv
include('simpleicons-5/D/Draugiemdotlv')

' renders the element
Draugiemdotlv('Draugiemdotlv', 'Draugiemdotlv', 'an optional tech label')
@enduml
```

