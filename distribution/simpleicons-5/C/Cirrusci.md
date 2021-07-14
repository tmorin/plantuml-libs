# Cirrusci


```text
simpleicons-5/C/Cirrusci
```

```text
include('simpleicons-5/C/Cirrusci')
```



| Illustration | Cirrusci |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Cirrusci.png) | ![illustration for Cirrusci](../../simpleicons-5/C/Cirrusci.Local.png) |




## Cirrusci

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Cirrusci
include('simpleicons-5/C/Cirrusci')

' renders the element
Cirrusci('Cirrusci', 'Cirrusci', 'an optional tech label')
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

' loads the Item which embeds the element Cirrusci
include('simpleicons-5/C/Cirrusci')

' renders the element
Cirrusci('Cirrusci', 'Cirrusci', 'an optional tech label')
@enduml
```

