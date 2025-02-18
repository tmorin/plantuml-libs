# Haxe


```text
simpleicons-14/H/Haxe
```

```text
include('simpleicons-14/H/Haxe')
```



| Illustration | Haxe |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Haxe.png) | ![illustration for Haxe](../../simpleicons-14/H/Haxe.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HaxeXs>`
- `<$HaxeSm>`
- `<$HaxeMd>`
- `<$HaxeLg>`





## Haxe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Haxe
include('simpleicons-14/H/Haxe')

' renders the element
Haxe('Haxe', 'Haxe', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Haxe
include('simpleicons-14/H/Haxe')

' renders the element
Haxe('Haxe', 'Haxe', 'an optional tech label', 'an optional description')
@enduml
```

