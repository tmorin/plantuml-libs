# Volvo


```text
simpleicons-5/V/Volvo
```

```text
include('simpleicons-5/V/Volvo')
```



| Illustration | Volvo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/V/Volvo.png) | ![illustration for Volvo](../../simpleicons-5/V/Volvo.Local.png) |




## Volvo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Volvo
include('simpleicons-5/V/Volvo')

' renders the element
Volvo('Volvo', 'Volvo', 'an optional tech label')
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

' loads the Item which embeds the element Volvo
include('simpleicons-5/V/Volvo')

' renders the element
Volvo('Volvo', 'Volvo', 'an optional tech label')
@enduml
```

