# Giphy


```text
simpleicons-5/G/Giphy
```

```text
include('simpleicons-5/G/Giphy')
```



| Illustration | Giphy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Giphy.png) | ![illustration for Giphy](../../simpleicons-5/G/Giphy.Local.png) |




## Giphy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Giphy
include('simpleicons-5/G/Giphy')

' renders the element
Giphy('Giphy', 'Giphy', 'an optional tech label')
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

' loads the Item which embeds the element Giphy
include('simpleicons-5/G/Giphy')

' renders the element
Giphy('Giphy', 'Giphy', 'an optional tech label')
@enduml
```

