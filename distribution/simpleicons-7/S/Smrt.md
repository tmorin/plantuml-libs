# Smrt


```text
simpleicons-7/S/Smrt
```

```text
include('simpleicons-7/S/Smrt')
```



| Illustration | Smrt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Smrt.png) | ![illustration for Smrt](../../simpleicons-7/S/Smrt.Local.png) |




## Smrt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Smrt
include('simpleicons-7/S/Smrt')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Smrt
include('simpleicons-7/S/Smrt')

' renders the element
Smrt('Smrt', 'Smrt', 'an optional tech label')
@enduml
```

