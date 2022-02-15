# Haxe


```text
simpleicons-6/H/Haxe
```

```text
include('simpleicons-6/H/Haxe')
```



| Illustration | Haxe |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/H/Haxe.png) | ![illustration for Haxe](../../simpleicons-6/H/Haxe.Local.png) |




## Haxe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Haxe
include('simpleicons-6/H/Haxe')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Haxe
include('simpleicons-6/H/Haxe')

' renders the element
Haxe('Haxe', 'Haxe', 'an optional tech label')
@enduml
```

