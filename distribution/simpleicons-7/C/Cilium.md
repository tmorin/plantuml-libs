# Cilium


```text
simpleicons-7/C/Cilium
```

```text
include('simpleicons-7/C/Cilium')
```



| Illustration | Cilium |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Cilium.png) | ![illustration for Cilium](../../simpleicons-7/C/Cilium.Local.png) |




## Cilium

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Cilium
include('simpleicons-7/C/Cilium')

' renders the element
Cilium('Cilium', 'Cilium', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cilium
include('simpleicons-7/C/Cilium')

' renders the element
Cilium('Cilium', 'Cilium', 'an optional tech label', 'an optional description')
@enduml
```

