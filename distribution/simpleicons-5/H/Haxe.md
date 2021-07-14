# Haxe


```text
simpleicons-5/H/Haxe
```

```text
include('simpleicons-5/H/Haxe')
```



| Illustration | Haxe |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/Haxe.png) | ![illustration for Haxe](../../simpleicons-5/H/Haxe.Local.png) |




## Haxe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Haxe
include('simpleicons-5/H/Haxe')

' renders the element
Haxe('Haxe', 'Haxe', 'an optional tech label')
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

' loads the Item which embeds the element Haxe
include('simpleicons-5/H/Haxe')

' renders the element
Haxe('Haxe', 'Haxe', 'an optional tech label')
@enduml
```

