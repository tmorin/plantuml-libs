# Vulkan


```text
simpleicons-5/V/Vulkan
```

```text
include('simpleicons-5/V/Vulkan')
```



| Illustration | Vulkan |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/V/Vulkan.png) | ![illustration for Vulkan](../../simpleicons-5/V/Vulkan.Local.png) |




## Vulkan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Vulkan
include('simpleicons-5/V/Vulkan')

' renders the element
Vulkan('Vulkan', 'Vulkan', 'an optional tech label')
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

' loads the Item which embeds the element Vulkan
include('simpleicons-5/V/Vulkan')

' renders the element
Vulkan('Vulkan', 'Vulkan', 'an optional tech label')
@enduml
```

