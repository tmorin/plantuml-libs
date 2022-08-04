# Trove


```text
simpleicons-7/T/Trove
```

```text
include('simpleicons-7/T/Trove')
```



| Illustration | Trove |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Trove.png) | ![illustration for Trove](../../simpleicons-7/T/Trove.Local.png) |




## Trove

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Trove
include('simpleicons-7/T/Trove')

' renders the element
Trove('Trove', 'Trove', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Trove
include('simpleicons-7/T/Trove')

' renders the element
Trove('Trove', 'Trove', 'an optional tech label', 'an optional description')
@enduml
```

