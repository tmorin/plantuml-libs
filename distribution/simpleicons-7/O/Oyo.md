# Oyo


```text
simpleicons-7/O/Oyo
```

```text
include('simpleicons-7/O/Oyo')
```



| Illustration | Oyo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/O/Oyo.png) | ![illustration for Oyo](../../simpleicons-7/O/Oyo.Local.png) |




## Oyo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Oyo
include('simpleicons-7/O/Oyo')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Oyo
include('simpleicons-7/O/Oyo')

' renders the element
Oyo('Oyo', 'Oyo', 'an optional tech label')
@enduml
```

