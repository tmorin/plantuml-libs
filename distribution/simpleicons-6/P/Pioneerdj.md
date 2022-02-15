# Pioneerdj


```text
simpleicons-6/P/Pioneerdj
```

```text
include('simpleicons-6/P/Pioneerdj')
```



| Illustration | Pioneerdj |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Pioneerdj.png) | ![illustration for Pioneerdj](../../simpleicons-6/P/Pioneerdj.Local.png) |




## Pioneerdj

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Pioneerdj
include('simpleicons-6/P/Pioneerdj')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Pioneerdj
include('simpleicons-6/P/Pioneerdj')

' renders the element
Pioneerdj('Pioneerdj', 'Pioneerdj', 'an optional tech label')
@enduml
```

