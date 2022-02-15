# Mitsubishi


```text
simpleicons-6/M/Mitsubishi
```

```text
include('simpleicons-6/M/Mitsubishi')
```



| Illustration | Mitsubishi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Mitsubishi.png) | ![illustration for Mitsubishi](../../simpleicons-6/M/Mitsubishi.Local.png) |




## Mitsubishi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Mitsubishi
include('simpleicons-6/M/Mitsubishi')

' renders the element
Mitsubishi('Mitsubishi', 'Mitsubishi', 'an optional tech label')
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

' loads the Item which embeds the element Mitsubishi
include('simpleicons-6/M/Mitsubishi')

' renders the element
Mitsubishi('Mitsubishi', 'Mitsubishi', 'an optional tech label')
@enduml
```

