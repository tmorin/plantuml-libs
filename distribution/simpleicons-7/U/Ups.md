# Ups


```text
simpleicons-7/U/Ups
```

```text
include('simpleicons-7/U/Ups')
```



| Illustration | Ups |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/U/Ups.png) | ![illustration for Ups](../../simpleicons-7/U/Ups.Local.png) |




## Ups

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Ups
include('simpleicons-7/U/Ups')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Ups
include('simpleicons-7/U/Ups')

' renders the element
Ups('Ups', 'Ups', 'an optional tech label')
@enduml
```

