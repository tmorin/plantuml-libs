# Opensea


```text
simpleicons-6/O/Opensea
```

```text
include('simpleicons-6/O/Opensea')
```



| Illustration | Opensea |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/O/Opensea.png) | ![illustration for Opensea](../../simpleicons-6/O/Opensea.Local.png) |




## Opensea

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Opensea
include('simpleicons-6/O/Opensea')

' renders the element
Opensea('Opensea', 'Opensea', 'an optional tech label')
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

' loads the Item which embeds the element Opensea
include('simpleicons-6/O/Opensea')

' renders the element
Opensea('Opensea', 'Opensea', 'an optional tech label')
@enduml
```

