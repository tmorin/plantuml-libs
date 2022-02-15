# Jenkinsx


```text
simpleicons-6/J/Jenkinsx
```

```text
include('simpleicons-6/J/Jenkinsx')
```



| Illustration | Jenkinsx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/J/Jenkinsx.png) | ![illustration for Jenkinsx](../../simpleicons-6/J/Jenkinsx.Local.png) |




## Jenkinsx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Jenkinsx
include('simpleicons-6/J/Jenkinsx')

' renders the element
Jenkinsx('Jenkinsx', 'Jenkinsx', 'an optional tech label')
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

' loads the Item which embeds the element Jenkinsx
include('simpleicons-6/J/Jenkinsx')

' renders the element
Jenkinsx('Jenkinsx', 'Jenkinsx', 'an optional tech label')
@enduml
```

