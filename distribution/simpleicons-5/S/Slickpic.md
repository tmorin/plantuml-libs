# Slickpic


```text
simpleicons-5/S/Slickpic
```

```text
include('simpleicons-5/S/Slickpic')
```



| Illustration | Slickpic |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Slickpic.png) | ![illustration for Slickpic](../../simpleicons-5/S/Slickpic.Local.png) |




## Slickpic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Slickpic
include('simpleicons-5/S/Slickpic')

' renders the element
Slickpic('Slickpic', 'Slickpic', 'an optional tech label')
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

' loads the Item which embeds the element Slickpic
include('simpleicons-5/S/Slickpic')

' renders the element
Slickpic('Slickpic', 'Slickpic', 'an optional tech label')
@enduml
```

