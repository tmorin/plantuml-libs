# Axios


```text
simpleicons-8/A/Axios
```

```text
include('simpleicons-8/A/Axios')
```



| Illustration | Axios |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Axios.png) | ![illustration for Axios](../../simpleicons-8/A/Axios.Local.png) |




## Axios

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Axios
include('simpleicons-8/A/Axios')

' renders the element
Axios('Axios', 'Axios', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Axios
include('simpleicons-8/A/Axios')

' renders the element
Axios('Axios', 'Axios', 'an optional tech label', 'an optional description')
@enduml
```

