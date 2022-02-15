# Vk


```text
simpleicons-6/V/Vk
```

```text
include('simpleicons-6/V/Vk')
```



| Illustration | Vk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/V/Vk.png) | ![illustration for Vk](../../simpleicons-6/V/Vk.Local.png) |




## Vk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Vk
include('simpleicons-6/V/Vk')

' renders the element
Vk('Vk', 'Vk', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Vk
include('simpleicons-6/V/Vk')

' renders the element
Vk('Vk', 'Vk', 'an optional tech label')
@enduml
```

