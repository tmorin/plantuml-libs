# Anaconda


```text
simpleicons-7/A/Anaconda
```

```text
include('simpleicons-7/A/Anaconda')
```



| Illustration | Anaconda |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Anaconda.png) | ![illustration for Anaconda](../../simpleicons-7/A/Anaconda.Local.png) |




## Anaconda

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Anaconda
include('simpleicons-7/A/Anaconda')

' renders the element
Anaconda('Anaconda', 'Anaconda', 'an optional tech label')
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

' loads the Item which embeds the element Anaconda
include('simpleicons-7/A/Anaconda')

' renders the element
Anaconda('Anaconda', 'Anaconda', 'an optional tech label')
@enduml
```
