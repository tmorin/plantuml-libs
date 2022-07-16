# Scribd


```text
simpleicons-7/S/Scribd
```

```text
include('simpleicons-7/S/Scribd')
```



| Illustration | Scribd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Scribd.png) | ![illustration for Scribd](../../simpleicons-7/S/Scribd.Local.png) |




## Scribd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Scribd
include('simpleicons-7/S/Scribd')

' renders the element
Scribd('Scribd', 'Scribd', 'an optional tech label')
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

' loads the Item which embeds the element Scribd
include('simpleicons-7/S/Scribd')

' renders the element
Scribd('Scribd', 'Scribd', 'an optional tech label')
@enduml
```

