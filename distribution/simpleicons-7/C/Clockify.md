# Clockify


```text
simpleicons-7/C/Clockify
```

```text
include('simpleicons-7/C/Clockify')
```



| Illustration | Clockify |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Clockify.png) | ![illustration for Clockify](../../simpleicons-7/C/Clockify.Local.png) |




## Clockify

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Clockify
include('simpleicons-7/C/Clockify')

' renders the element
Clockify('Clockify', 'Clockify', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Clockify
include('simpleicons-7/C/Clockify')

' renders the element
Clockify('Clockify', 'Clockify', 'an optional tech label', 'an optional description')
@enduml
```

