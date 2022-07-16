# Sandisk


```text
simpleicons-7/S/Sandisk
```

```text
include('simpleicons-7/S/Sandisk')
```



| Illustration | Sandisk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Sandisk.png) | ![illustration for Sandisk](../../simpleicons-7/S/Sandisk.Local.png) |




## Sandisk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Sandisk
include('simpleicons-7/S/Sandisk')

' renders the element
Sandisk('Sandisk', 'Sandisk', 'an optional tech label')
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

' loads the Item which embeds the element Sandisk
include('simpleicons-7/S/Sandisk')

' renders the element
Sandisk('Sandisk', 'Sandisk', 'an optional tech label')
@enduml
```

