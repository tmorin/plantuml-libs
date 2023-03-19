# Nintendogamecube


```text
simpleicons-8/N/Nintendogamecube
```

```text
include('simpleicons-8/N/Nintendogamecube')
```



| Illustration | Nintendogamecube |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/N/Nintendogamecube.png) | ![illustration for Nintendogamecube](../../simpleicons-8/N/Nintendogamecube.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NintendogamecubeXs>`
- `<$NintendogamecubeSm>`
- `<$NintendogamecubeMd>`
- `<$NintendogamecubeLg>`





## Nintendogamecube

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Nintendogamecube
include('simpleicons-8/N/Nintendogamecube')

' renders the element
Nintendogamecube('Nintendogamecube', 'Nintendogamecube', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nintendogamecube
include('simpleicons-8/N/Nintendogamecube')

' renders the element
Nintendogamecube('Nintendogamecube', 'Nintendogamecube', 'an optional tech label', 'an optional description')
@enduml
```

