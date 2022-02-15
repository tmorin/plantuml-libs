# Wprocket


```text
simpleicons-6/W/Wprocket
```

```text
include('simpleicons-6/W/Wprocket')
```



| Illustration | Wprocket |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/W/Wprocket.png) | ![illustration for Wprocket](../../simpleicons-6/W/Wprocket.Local.png) |




## Wprocket

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Wprocket
include('simpleicons-6/W/Wprocket')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Wprocket
include('simpleicons-6/W/Wprocket')

' renders the element
Wprocket('Wprocket', 'Wprocket', 'an optional tech label')
@enduml
```

