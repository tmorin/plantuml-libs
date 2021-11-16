# Burgerking


```text
simpleicons-5/B/Burgerking
```

```text
include('simpleicons-5/B/Burgerking')
```



| Illustration | Burgerking |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Burgerking.png) | ![illustration for Burgerking](../../simpleicons-5/B/Burgerking.Local.png) |




## Burgerking

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Burgerking
include('simpleicons-5/B/Burgerking')

' renders the element
Burgerking('Burgerking', 'Burgerking', 'an optional tech label')
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

' loads the Item which embeds the element Burgerking
include('simpleicons-5/B/Burgerking')

' renders the element
Burgerking('Burgerking', 'Burgerking', 'an optional tech label')
@enduml
```

