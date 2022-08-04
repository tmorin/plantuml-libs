# Twoo


```text
simpleicons-7/T/Twoo
```

```text
include('simpleicons-7/T/Twoo')
```



| Illustration | Twoo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Twoo.png) | ![illustration for Twoo](../../simpleicons-7/T/Twoo.Local.png) |




## Twoo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Twoo
include('simpleicons-7/T/Twoo')

' renders the element
Twoo('Twoo', 'Twoo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Twoo
include('simpleicons-7/T/Twoo')

' renders the element
Twoo('Twoo', 'Twoo', 'an optional tech label', 'an optional description')
@enduml
```

