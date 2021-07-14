# Oyo


```text
simpleicons-5/O/Oyo
```

```text
include('simpleicons-5/O/Oyo')
```



| Illustration | Oyo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/O/Oyo.png) | ![illustration for Oyo](../../simpleicons-5/O/Oyo.Local.png) |




## Oyo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Oyo
include('simpleicons-5/O/Oyo')

' renders the element
Oyo('Oyo', 'Oyo', 'an optional tech label')
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

' loads the Item which embeds the element Oyo
include('simpleicons-5/O/Oyo')

' renders the element
Oyo('Oyo', 'Oyo', 'an optional tech label')
@enduml
```

