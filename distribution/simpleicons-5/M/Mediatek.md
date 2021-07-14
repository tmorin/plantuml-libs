# Mediatek


```text
simpleicons-5/M/Mediatek
```

```text
include('simpleicons-5/M/Mediatek')
```



| Illustration | Mediatek |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Mediatek.png) | ![illustration for Mediatek](../../simpleicons-5/M/Mediatek.Local.png) |




## Mediatek

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Mediatek
include('simpleicons-5/M/Mediatek')

' renders the element
Mediatek('Mediatek', 'Mediatek', 'an optional tech label')
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

' loads the Item which embeds the element Mediatek
include('simpleicons-5/M/Mediatek')

' renders the element
Mediatek('Mediatek', 'Mediatek', 'an optional tech label')
@enduml
```

