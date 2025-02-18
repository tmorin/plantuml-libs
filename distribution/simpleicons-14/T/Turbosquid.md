# Turbosquid


```text
simpleicons-14/T/Turbosquid
```

```text
include('simpleicons-14/T/Turbosquid')
```



| Illustration | Turbosquid |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Turbosquid.png) | ![illustration for Turbosquid](../../simpleicons-14/T/Turbosquid.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TurbosquidXs>`
- `<$TurbosquidSm>`
- `<$TurbosquidMd>`
- `<$TurbosquidLg>`





## Turbosquid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Turbosquid
include('simpleicons-14/T/Turbosquid')

' renders the element
Turbosquid('Turbosquid', 'Turbosquid', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Turbosquid
include('simpleicons-14/T/Turbosquid')

' renders the element
Turbosquid('Turbosquid', 'Turbosquid', 'an optional tech label', 'an optional description')
@enduml
```

