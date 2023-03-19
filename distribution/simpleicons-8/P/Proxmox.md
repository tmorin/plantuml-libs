# Proxmox


```text
simpleicons-8/P/Proxmox
```

```text
include('simpleicons-8/P/Proxmox')
```



| Illustration | Proxmox |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Proxmox.png) | ![illustration for Proxmox](../../simpleicons-8/P/Proxmox.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ProxmoxXs>`
- `<$ProxmoxSm>`
- `<$ProxmoxMd>`
- `<$ProxmoxLg>`





## Proxmox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Proxmox
include('simpleicons-8/P/Proxmox')

' renders the element
Proxmox('Proxmox', 'Proxmox', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Proxmox
include('simpleicons-8/P/Proxmox')

' renders the element
Proxmox('Proxmox', 'Proxmox', 'an optional tech label', 'an optional description')
@enduml
```

