# Codio


```text
simpleicons-6/C/Codio
```

```text
include('simpleicons-6/C/Codio')
```



| Illustration | Codio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Codio.png) | ![illustration for Codio](../../simpleicons-6/C/Codio.Local.png) |




## Codio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Codio
include('simpleicons-6/C/Codio')

' renders the element
Codio('Codio', 'Codio', 'an optional tech label')
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

' loads the Item which embeds the element Codio
include('simpleicons-6/C/Codio')

' renders the element
Codio('Codio', 'Codio', 'an optional tech label')
@enduml
```

