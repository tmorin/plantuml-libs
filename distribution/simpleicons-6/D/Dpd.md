# Dpd


```text
simpleicons-6/D/Dpd
```

```text
include('simpleicons-6/D/Dpd')
```



| Illustration | Dpd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/D/Dpd.png) | ![illustration for Dpd](../../simpleicons-6/D/Dpd.Local.png) |




## Dpd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Dpd
include('simpleicons-6/D/Dpd')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Dpd
include('simpleicons-6/D/Dpd')

' renders the element
Dpd('Dpd', 'Dpd', 'an optional tech label')
@enduml
```

