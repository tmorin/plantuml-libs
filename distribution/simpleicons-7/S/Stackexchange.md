# Stackexchange


```text
simpleicons-7/S/Stackexchange
```

```text
include('simpleicons-7/S/Stackexchange')
```



| Illustration | Stackexchange |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Stackexchange.png) | ![illustration for Stackexchange](../../simpleicons-7/S/Stackexchange.Local.png) |




## Stackexchange

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Stackexchange
include('simpleicons-7/S/Stackexchange')

' renders the element
Stackexchange('Stackexchange', 'Stackexchange', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Stackexchange
include('simpleicons-7/S/Stackexchange')

' renders the element
Stackexchange('Stackexchange', 'Stackexchange', 'an optional tech label', 'an optional description')
@enduml
```

