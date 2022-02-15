# Nodemon


```text
simpleicons-6/N/Nodemon
```

```text
include('simpleicons-6/N/Nodemon')
```



| Illustration | Nodemon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/N/Nodemon.png) | ![illustration for Nodemon](../../simpleicons-6/N/Nodemon.Local.png) |




## Nodemon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Nodemon
include('simpleicons-6/N/Nodemon')

' renders the element
Nodemon('Nodemon', 'Nodemon', 'an optional tech label')
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

' loads the Item which embeds the element Nodemon
include('simpleicons-6/N/Nodemon')

' renders the element
Nodemon('Nodemon', 'Nodemon', 'an optional tech label')
@enduml
```

