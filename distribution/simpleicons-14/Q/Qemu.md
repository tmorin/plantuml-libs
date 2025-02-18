# Qemu


```text
simpleicons-14/Q/Qemu
```

```text
include('simpleicons-14/Q/Qemu')
```



| Illustration | Qemu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Q/Qemu.png) | ![illustration for Qemu](../../simpleicons-14/Q/Qemu.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QemuXs>`
- `<$QemuSm>`
- `<$QemuMd>`
- `<$QemuLg>`





## Qemu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Qemu
include('simpleicons-14/Q/Qemu')

' renders the element
Qemu('Qemu', 'Qemu', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Qemu
include('simpleicons-14/Q/Qemu')

' renders the element
Qemu('Qemu', 'Qemu', 'an optional tech label', 'an optional description')
@enduml
```

