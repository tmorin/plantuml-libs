# Jenkinsx


```text
simpleicons-5/J/Jenkinsx
```

```text
include('simpleicons-5/J/Jenkinsx')
```



| Illustration | Jenkinsx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/J/Jenkinsx.png) | ![illustration for Jenkinsx](../../simpleicons-5/J/Jenkinsx.Local.png) |




## Jenkinsx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Jenkinsx
include('simpleicons-5/J/Jenkinsx')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Jenkinsx
include('simpleicons-5/J/Jenkinsx')

' renders the element
Jenkinsx('Jenkinsx', 'Jenkinsx', 'an optional tech label')
@enduml
```

