# Cilium


```text
simpleicons-14/C/Cilium
```

```text
include('simpleicons-14/C/Cilium')
```



| Illustration | Cilium |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Cilium.png) | ![illustration for Cilium](../../simpleicons-14/C/Cilium.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CiliumXs>`
- `<$CiliumSm>`
- `<$CiliumMd>`
- `<$CiliumLg>`





## Cilium

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Cilium
include('simpleicons-14/C/Cilium')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Cilium
include('simpleicons-14/C/Cilium')

' renders the element
Cilium('Cilium', 'Cilium', 'an optional tech label', 'an optional description')
@enduml
```

