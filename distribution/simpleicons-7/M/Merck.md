# Merck


```text
simpleicons-7/M/Merck
```

```text
include('simpleicons-7/M/Merck')
```



| Illustration | Merck |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Merck.png) | ![illustration for Merck](../../simpleicons-7/M/Merck.Local.png) |




## Merck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Merck
include('simpleicons-7/M/Merck')

' renders the element
Merck('Merck', 'Merck', 'an optional tech label')
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

' loads the Item which embeds the element Merck
include('simpleicons-7/M/Merck')

' renders the element
Merck('Merck', 'Merck', 'an optional tech label')
@enduml
```

