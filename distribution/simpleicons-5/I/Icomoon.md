# Icomoon


```text
simpleicons-5/I/Icomoon
```

```text
include('simpleicons-5/I/Icomoon')
```



| Illustration | Icomoon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/I/Icomoon.png) | ![illustration for Icomoon](../../simpleicons-5/I/Icomoon.Local.png) |




## Icomoon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Icomoon
include('simpleicons-5/I/Icomoon')

' renders the element
Icomoon('Icomoon', 'Icomoon', 'an optional tech label')
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

' loads the Item which embeds the element Icomoon
include('simpleicons-5/I/Icomoon')

' renders the element
Icomoon('Icomoon', 'Icomoon', 'an optional tech label')
@enduml
```

