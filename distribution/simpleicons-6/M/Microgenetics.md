# Microgenetics


```text
simpleicons-6/M/Microgenetics
```

```text
include('simpleicons-6/M/Microgenetics')
```



| Illustration | Microgenetics |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Microgenetics.png) | ![illustration for Microgenetics](../../simpleicons-6/M/Microgenetics.Local.png) |




## Microgenetics

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Microgenetics
include('simpleicons-6/M/Microgenetics')

' renders the element
Microgenetics('Microgenetics', 'Microgenetics', 'an optional tech label')
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

' loads the Item which embeds the element Microgenetics
include('simpleicons-6/M/Microgenetics')

' renders the element
Microgenetics('Microgenetics', 'Microgenetics', 'an optional tech label')
@enduml
```

