# Twoo


```text
simpleicons-5/T/Twoo
```

```text
include('simpleicons-5/T/Twoo')
```



| Illustration | Twoo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Twoo.png) | ![illustration for Twoo](../../simpleicons-5/T/Twoo.Local.png) |




## Twoo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Twoo
include('simpleicons-5/T/Twoo')

' renders the element
Twoo('Twoo', 'Twoo', 'an optional tech label')
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

' loads the Item which embeds the element Twoo
include('simpleicons-5/T/Twoo')

' renders the element
Twoo('Twoo', 'Twoo', 'an optional tech label')
@enduml
```

