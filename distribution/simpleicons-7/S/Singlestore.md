# Singlestore


```text
simpleicons-7/S/Singlestore
```

```text
include('simpleicons-7/S/Singlestore')
```



| Illustration | Singlestore |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Singlestore.png) | ![illustration for Singlestore](../../simpleicons-7/S/Singlestore.Local.png) |




## Singlestore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Singlestore
include('simpleicons-7/S/Singlestore')

' renders the element
Singlestore('Singlestore', 'Singlestore', 'an optional tech label')
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

' loads the Item which embeds the element Singlestore
include('simpleicons-7/S/Singlestore')

' renders the element
Singlestore('Singlestore', 'Singlestore', 'an optional tech label')
@enduml
```

