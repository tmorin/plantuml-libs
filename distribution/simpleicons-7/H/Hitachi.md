# Hitachi


```text
simpleicons-7/H/Hitachi
```

```text
include('simpleicons-7/H/Hitachi')
```



| Illustration | Hitachi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/H/Hitachi.png) | ![illustration for Hitachi](../../simpleicons-7/H/Hitachi.Local.png) |




## Hitachi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Hitachi
include('simpleicons-7/H/Hitachi')

' renders the element
Hitachi('Hitachi', 'Hitachi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hitachi
include('simpleicons-7/H/Hitachi')

' renders the element
Hitachi('Hitachi', 'Hitachi', 'an optional tech label', 'an optional description')
@enduml
```

