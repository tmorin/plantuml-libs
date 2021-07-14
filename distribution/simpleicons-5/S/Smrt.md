# Smrt


```text
simpleicons-5/S/Smrt
```

```text
include('simpleicons-5/S/Smrt')
```



| Illustration | Smrt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Smrt.png) | ![illustration for Smrt](../../simpleicons-5/S/Smrt.Local.png) |




## Smrt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Smrt
include('simpleicons-5/S/Smrt')

' renders the element
Smrt('Smrt', 'Smrt', 'an optional tech label')
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

' loads the Item which embeds the element Smrt
include('simpleicons-5/S/Smrt')

' renders the element
Smrt('Smrt', 'Smrt', 'an optional tech label')
@enduml
```

