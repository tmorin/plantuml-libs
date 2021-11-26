# Steam


```text
simpleicons-5/S/Steam
```

```text
include('simpleicons-5/S/Steam')
```



| Illustration | Steam |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Steam.png) | ![illustration for Steam](../../simpleicons-5/S/Steam.Local.png) |




## Steam

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Steam
include('simpleicons-5/S/Steam')

' renders the element
Steam('Steam', 'Steam', 'an optional tech label')
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

' loads the Item which embeds the element Steam
include('simpleicons-5/S/Steam')

' renders the element
Steam('Steam', 'Steam', 'an optional tech label')
@enduml
```

