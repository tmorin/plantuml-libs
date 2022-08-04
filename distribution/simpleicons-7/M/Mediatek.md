# Mediatek


```text
simpleicons-7/M/Mediatek
```

```text
include('simpleicons-7/M/Mediatek')
```



| Illustration | Mediatek |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Mediatek.png) | ![illustration for Mediatek](../../simpleicons-7/M/Mediatek.Local.png) |




## Mediatek

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Mediatek
include('simpleicons-7/M/Mediatek')

' renders the element
Mediatek('Mediatek', 'Mediatek', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Mediatek
include('simpleicons-7/M/Mediatek')

' renders the element
Mediatek('Mediatek', 'Mediatek', 'an optional tech label', 'an optional description')
@enduml
```

