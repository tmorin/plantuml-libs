# Godotengine


```text
simpleicons/G/Godotengine
```

```text
include('simpleicons/G/Godotengine')
```



| Illustration | Godotengine |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Godotengine.png) | ![illustration for Godotengine](../../simpleicons/G/Godotengine.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GodotengineXs>`
- `<$GodotengineSm>`
- `<$GodotengineMd>`
- `<$GodotengineLg>`





## Godotengine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Godotengine
include('simpleicons/G/Godotengine')

' renders the element
Godotengine('Godotengine', 'Godotengine', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Godotengine
include('simpleicons/G/Godotengine')

' renders the element
Godotengine('Godotengine', 'Godotengine', 'an optional tech label', 'an optional description')
@enduml
```

