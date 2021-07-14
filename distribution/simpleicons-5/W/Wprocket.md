# Wprocket


```text
simpleicons-5/W/Wprocket
```

```text
include('simpleicons-5/W/Wprocket')
```



| Illustration | Wprocket |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/W/Wprocket.png) | ![illustration for Wprocket](../../simpleicons-5/W/Wprocket.Local.png) |




## Wprocket

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Wprocket
include('simpleicons-5/W/Wprocket')

' renders the element
Wprocket('Wprocket', 'Wprocket', 'an optional tech label')
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

' loads the Item which embeds the element Wprocket
include('simpleicons-5/W/Wprocket')

' renders the element
Wprocket('Wprocket', 'Wprocket', 'an optional tech label')
@enduml
```

