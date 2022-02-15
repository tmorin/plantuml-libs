# Minecraft


```text
simpleicons-6/M/Minecraft
```

```text
include('simpleicons-6/M/Minecraft')
```



| Illustration | Minecraft |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Minecraft.png) | ![illustration for Minecraft](../../simpleicons-6/M/Minecraft.Local.png) |




## Minecraft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Minecraft
include('simpleicons-6/M/Minecraft')

' renders the element
Minecraft('Minecraft', 'Minecraft', 'an optional tech label')
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

' loads the Item which embeds the element Minecraft
include('simpleicons-6/M/Minecraft')

' renders the element
Minecraft('Minecraft', 'Minecraft', 'an optional tech label')
@enduml
```

