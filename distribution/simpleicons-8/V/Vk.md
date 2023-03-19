# Vk


```text
simpleicons-8/V/Vk
```

```text
include('simpleicons-8/V/Vk')
```



| Illustration | Vk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/V/Vk.png) | ![illustration for Vk](../../simpleicons-8/V/Vk.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VkXs>`
- `<$VkSm>`
- `<$VkMd>`
- `<$VkLg>`





## Vk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Vk
include('simpleicons-8/V/Vk')

' renders the element
Vk('Vk', 'Vk', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vk
include('simpleicons-8/V/Vk')

' renders the element
Vk('Vk', 'Vk', 'an optional tech label', 'an optional description')
@enduml
```

