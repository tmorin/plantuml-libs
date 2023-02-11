# Themoviedatabase


```text
simpleicons-8/T/Themoviedatabase
```

```text
include('simpleicons-8/T/Themoviedatabase')
```



| Illustration | Themoviedatabase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Themoviedatabase.png) | ![illustration for Themoviedatabase](../../simpleicons-8/T/Themoviedatabase.Local.png) |




## Themoviedatabase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Themoviedatabase
include('simpleicons-8/T/Themoviedatabase')

' renders the element
Themoviedatabase('Themoviedatabase', 'Themoviedatabase', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Themoviedatabase
include('simpleicons-8/T/Themoviedatabase')

' renders the element
Themoviedatabase('Themoviedatabase', 'Themoviedatabase', 'an optional tech label', 'an optional description')
@enduml
```

