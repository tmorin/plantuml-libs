# Themoviedatabase


```text
simpleicons-5/T/Themoviedatabase
```

```text
include('simpleicons-5/T/Themoviedatabase')
```



| Illustration | Themoviedatabase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Themoviedatabase.png) | ![illustration for Themoviedatabase](../../simpleicons-5/T/Themoviedatabase.Local.png) |




## Themoviedatabase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Themoviedatabase
include('simpleicons-5/T/Themoviedatabase')

' renders the element
Themoviedatabase('Themoviedatabase', 'Themoviedatabase', 'an optional tech label')
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

' loads the Item which embeds the element Themoviedatabase
include('simpleicons-5/T/Themoviedatabase')

' renders the element
Themoviedatabase('Themoviedatabase', 'Themoviedatabase', 'an optional tech label')
@enduml
```

