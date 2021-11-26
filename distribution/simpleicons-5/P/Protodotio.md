# Protodotio


```text
simpleicons-5/P/Protodotio
```

```text
include('simpleicons-5/P/Protodotio')
```



| Illustration | Protodotio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Protodotio.png) | ![illustration for Protodotio](../../simpleicons-5/P/Protodotio.Local.png) |




## Protodotio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Protodotio
include('simpleicons-5/P/Protodotio')

' renders the element
Protodotio('Protodotio', 'Protodotio', 'an optional tech label')
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

' loads the Item which embeds the element Protodotio
include('simpleicons-5/P/Protodotio')

' renders the element
Protodotio('Protodotio', 'Protodotio', 'an optional tech label')
@enduml
```

