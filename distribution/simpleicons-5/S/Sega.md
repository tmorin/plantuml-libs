# Sega


```text
simpleicons-5/S/Sega
```

```text
include('simpleicons-5/S/Sega')
```



| Illustration | Sega |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Sega.png) | ![illustration for Sega](../../simpleicons-5/S/Sega.Local.png) |




## Sega

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Sega
include('simpleicons-5/S/Sega')

' renders the element
Sega('Sega', 'Sega', 'an optional tech label')
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

' loads the Item which embeds the element Sega
include('simpleicons-5/S/Sega')

' renders the element
Sega('Sega', 'Sega', 'an optional tech label')
@enduml
```

