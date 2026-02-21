# Unrealengine


```text
simpleicons/U/Unrealengine
```

```text
include('simpleicons/U/Unrealengine')
```



| Illustration | Unrealengine |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/U/Unrealengine.png) | ![illustration for Unrealengine](../../simpleicons/U/Unrealengine.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UnrealengineXs>`
- `<$UnrealengineSm>`
- `<$UnrealengineMd>`
- `<$UnrealengineLg>`





## Unrealengine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Unrealengine
include('simpleicons/U/Unrealengine')

' renders the element
Unrealengine('Unrealengine', 'Unrealengine', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Unrealengine
include('simpleicons/U/Unrealengine')

' renders the element
Unrealengine('Unrealengine', 'Unrealengine', 'an optional tech label', 'an optional description')
@enduml
```

