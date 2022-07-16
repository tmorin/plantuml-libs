# Volvo


```text
simpleicons-7/V/Volvo
```

```text
include('simpleicons-7/V/Volvo')
```



| Illustration | Volvo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/V/Volvo.png) | ![illustration for Volvo](../../simpleicons-7/V/Volvo.Local.png) |




## Volvo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Volvo
include('simpleicons-7/V/Volvo')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Volvo
include('simpleicons-7/V/Volvo')

' renders the element
Volvo('Volvo', 'Volvo', 'an optional tech label')
@enduml
```

