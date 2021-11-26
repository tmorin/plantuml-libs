# Codeship


```text
simpleicons-5/C/Codeship
```

```text
include('simpleicons-5/C/Codeship')
```



| Illustration | Codeship |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Codeship.png) | ![illustration for Codeship](../../simpleicons-5/C/Codeship.Local.png) |




## Codeship

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Codeship
include('simpleicons-5/C/Codeship')

' renders the element
Codeship('Codeship', 'Codeship', 'an optional tech label')
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

' loads the Item which embeds the element Codeship
include('simpleicons-5/C/Codeship')

' renders the element
Codeship('Codeship', 'Codeship', 'an optional tech label')
@enduml
```

