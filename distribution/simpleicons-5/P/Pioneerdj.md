# Pioneerdj


```text
simpleicons-5/P/Pioneerdj
```

```text
include('simpleicons-5/P/Pioneerdj')
```



| Illustration | Pioneerdj |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Pioneerdj.png) | ![illustration for Pioneerdj](../../simpleicons-5/P/Pioneerdj.Local.png) |




## Pioneerdj

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Pioneerdj
include('simpleicons-5/P/Pioneerdj')

' renders the element
Pioneerdj('Pioneerdj', 'Pioneerdj', 'an optional tech label')
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

' loads the Item which embeds the element Pioneerdj
include('simpleicons-5/P/Pioneerdj')

' renders the element
Pioneerdj('Pioneerdj', 'Pioneerdj', 'an optional tech label')
@enduml
```

