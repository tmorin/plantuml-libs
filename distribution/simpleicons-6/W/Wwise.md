# Wwise


```text
simpleicons-6/W/Wwise
```

```text
include('simpleicons-6/W/Wwise')
```



| Illustration | Wwise |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/W/Wwise.png) | ![illustration for Wwise](../../simpleicons-6/W/Wwise.Local.png) |




## Wwise

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Wwise
include('simpleicons-6/W/Wwise')

' renders the element
Wwise('Wwise', 'Wwise', 'an optional tech label')
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

' loads the Item which embeds the element Wwise
include('simpleicons-6/W/Wwise')

' renders the element
Wwise('Wwise', 'Wwise', 'an optional tech label')
@enduml
```

