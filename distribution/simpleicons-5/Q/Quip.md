# Quip


```text
simpleicons-5/Q/Quip
```

```text
include('simpleicons-5/Q/Quip')
```



| Illustration | Quip |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/Q/Quip.png) | ![illustration for Quip](../../simpleicons-5/Q/Quip.Local.png) |




## Quip

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Quip
include('simpleicons-5/Q/Quip')

' renders the element
Quip('Quip', 'Quip', 'an optional tech label')
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

' loads the Item which embeds the element Quip
include('simpleicons-5/Q/Quip')

' renders the element
Quip('Quip', 'Quip', 'an optional tech label')
@enduml
```

