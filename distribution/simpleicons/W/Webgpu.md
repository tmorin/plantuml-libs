# Webgpu


```text
simpleicons/W/Webgpu
```

```text
include('simpleicons/W/Webgpu')
```



| Illustration | Webgpu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Webgpu.png) | ![illustration for Webgpu](../../simpleicons/W/Webgpu.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WebgpuXs>`
- `<$WebgpuSm>`
- `<$WebgpuMd>`
- `<$WebgpuLg>`





## Webgpu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Webgpu
include('simpleicons/W/Webgpu')

' renders the element
Webgpu('Webgpu', 'Webgpu', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Webgpu
include('simpleicons/W/Webgpu')

' renders the element
Webgpu('Webgpu', 'Webgpu', 'an optional tech label', 'an optional description')
@enduml
```

