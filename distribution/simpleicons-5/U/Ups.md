# Ups


```text
simpleicons-5/U/Ups
```

```text
include('simpleicons-5/U/Ups')
```



| Illustration | Ups |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/U/Ups.png) | ![illustration for Ups](../../simpleicons-5/U/Ups.Local.png) |




## Ups

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Ups
include('simpleicons-5/U/Ups')

' renders the element
Ups('Ups', 'Ups', 'an optional tech label')
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

' loads the Item which embeds the element Ups
include('simpleicons-5/U/Ups')

' renders the element
Ups('Ups', 'Ups', 'an optional tech label')
@enduml
```

