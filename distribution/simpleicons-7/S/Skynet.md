# Skynet


```text
simpleicons-7/S/Skynet
```

```text
include('simpleicons-7/S/Skynet')
```



| Illustration | Skynet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Skynet.png) | ![illustration for Skynet](../../simpleicons-7/S/Skynet.Local.png) |




## Skynet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Skynet
include('simpleicons-7/S/Skynet')

' renders the element
Skynet('Skynet', 'Skynet', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Skynet
include('simpleicons-7/S/Skynet')

' renders the element
Skynet('Skynet', 'Skynet', 'an optional tech label', 'an optional description')
@enduml
```

