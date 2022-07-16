# Torproject


```text
simpleicons-7/T/Torproject
```

```text
include('simpleicons-7/T/Torproject')
```



| Illustration | Torproject |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Torproject.png) | ![illustration for Torproject](../../simpleicons-7/T/Torproject.Local.png) |




## Torproject

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Torproject
include('simpleicons-7/T/Torproject')

' renders the element
Torproject('Torproject', 'Torproject', 'an optional tech label')
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

' loads the Item which embeds the element Torproject
include('simpleicons-7/T/Torproject')

' renders the element
Torproject('Torproject', 'Torproject', 'an optional tech label')
@enduml
```

