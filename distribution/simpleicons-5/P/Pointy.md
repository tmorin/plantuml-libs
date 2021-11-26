# Pointy


```text
simpleicons-5/P/Pointy
```

```text
include('simpleicons-5/P/Pointy')
```



| Illustration | Pointy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Pointy.png) | ![illustration for Pointy](../../simpleicons-5/P/Pointy.Local.png) |




## Pointy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Pointy
include('simpleicons-5/P/Pointy')

' renders the element
Pointy('Pointy', 'Pointy', 'an optional tech label')
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

' loads the Item which embeds the element Pointy
include('simpleicons-5/P/Pointy')

' renders the element
Pointy('Pointy', 'Pointy', 'an optional tech label')
@enduml
```

