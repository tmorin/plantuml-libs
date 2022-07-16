# Oculus


```text
simpleicons-7/O/Oculus
```

```text
include('simpleicons-7/O/Oculus')
```



| Illustration | Oculus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/O/Oculus.png) | ![illustration for Oculus](../../simpleicons-7/O/Oculus.Local.png) |




## Oculus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Oculus
include('simpleicons-7/O/Oculus')

' renders the element
Oculus('Oculus', 'Oculus', 'an optional tech label')
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

' loads the Item which embeds the element Oculus
include('simpleicons-7/O/Oculus')

' renders the element
Oculus('Oculus', 'Oculus', 'an optional tech label')
@enduml
```

