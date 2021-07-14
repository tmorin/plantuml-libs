# Proxmox


```text
simpleicons-5/P/Proxmox
```

```text
include('simpleicons-5/P/Proxmox')
```



| Illustration | Proxmox |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Proxmox.png) | ![illustration for Proxmox](../../simpleicons-5/P/Proxmox.Local.png) |




## Proxmox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Proxmox
include('simpleicons-5/P/Proxmox')

' renders the element
Proxmox('Proxmox', 'Proxmox', 'an optional tech label')
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

' loads the Item which embeds the element Proxmox
include('simpleicons-5/P/Proxmox')

' renders the element
Proxmox('Proxmox', 'Proxmox', 'an optional tech label')
@enduml
```

