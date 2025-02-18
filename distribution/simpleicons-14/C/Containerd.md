# Containerd


```text
simpleicons-14/C/Containerd
```

```text
include('simpleicons-14/C/Containerd')
```



| Illustration | Containerd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Containerd.png) | ![illustration for Containerd](../../simpleicons-14/C/Containerd.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ContainerdXs>`
- `<$ContainerdSm>`
- `<$ContainerdMd>`
- `<$ContainerdLg>`





## Containerd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Containerd
include('simpleicons-14/C/Containerd')

' renders the element
Containerd('Containerd', 'Containerd', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Containerd
include('simpleicons-14/C/Containerd')

' renders the element
Containerd('Containerd', 'Containerd', 'an optional tech label', 'an optional description')
@enduml
```

