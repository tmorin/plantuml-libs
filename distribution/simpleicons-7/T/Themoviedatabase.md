# Themoviedatabase


```text
simpleicons-7/T/Themoviedatabase
```

```text
include('simpleicons-7/T/Themoviedatabase')
```



| Illustration | Themoviedatabase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Themoviedatabase.png) | ![illustration for Themoviedatabase](../../simpleicons-7/T/Themoviedatabase.Local.png) |




## Themoviedatabase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Themoviedatabase
include('simpleicons-7/T/Themoviedatabase')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Themoviedatabase
include('simpleicons-7/T/Themoviedatabase')

' renders the element
Themoviedatabase('Themoviedatabase', 'Themoviedatabase', 'an optional tech label', 'an optional description')
@enduml
```
