# Roblox


```text
simpleicons-5/R/Roblox
```

```text
include('simpleicons-5/R/Roblox')
```



| Illustration | Roblox |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Roblox.png) | ![illustration for Roblox](../../simpleicons-5/R/Roblox.Local.png) |




## Roblox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Roblox
include('simpleicons-5/R/Roblox')

' renders the element
Roblox('Roblox', 'Roblox', 'an optional tech label')
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

' loads the Item which embeds the element Roblox
include('simpleicons-5/R/Roblox')

' renders the element
Roblox('Roblox', 'Roblox', 'an optional tech label')
@enduml
```

