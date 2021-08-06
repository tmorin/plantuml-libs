# Dpd


```text
simpleicons-5/D/Dpd
```

```text
include('simpleicons-5/D/Dpd')
```



| Illustration | Dpd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Dpd.png) | ![illustration for Dpd](../../simpleicons-5/D/Dpd.Local.png) |




## Dpd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Dpd
include('simpleicons-5/D/Dpd')

' renders the element
Dpd('Dpd', 'Dpd', 'an optional tech label')
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

' loads the Item which embeds the element Dpd
include('simpleicons-5/D/Dpd')

' renders the element
Dpd('Dpd', 'Dpd', 'an optional tech label')
@enduml
```

