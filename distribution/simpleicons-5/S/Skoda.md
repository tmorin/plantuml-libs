# Skoda


```text
simpleicons-5/S/Skoda
```

```text
include('simpleicons-5/S/Skoda')
```



| Illustration | Skoda |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Skoda.png) | ![illustration for Skoda](../../simpleicons-5/S/Skoda.Local.png) |




## Skoda

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Skoda
include('simpleicons-5/S/Skoda')

' renders the element
Skoda('Skoda', 'Skoda', 'an optional tech label')
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

' loads the Item which embeds the element Skoda
include('simpleicons-5/S/Skoda')

' renders the element
Skoda('Skoda', 'Skoda', 'an optional tech label')
@enduml
```

