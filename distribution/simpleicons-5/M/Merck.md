# Merck


```text
simpleicons-5/M/Merck
```

```text
include('simpleicons-5/M/Merck')
```



| Illustration | Merck |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Merck.png) | ![illustration for Merck](../../simpleicons-5/M/Merck.Local.png) |




## Merck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Merck
include('simpleicons-5/M/Merck')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Merck
include('simpleicons-5/M/Merck')

' renders the element
Merck('Merck', 'Merck', 'an optional tech label')
@enduml
```

