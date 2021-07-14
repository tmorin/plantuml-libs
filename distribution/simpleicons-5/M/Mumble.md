# Mumble


```text
simpleicons-5/M/Mumble
```

```text
include('simpleicons-5/M/Mumble')
```



| Illustration | Mumble |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Mumble.png) | ![illustration for Mumble](../../simpleicons-5/M/Mumble.Local.png) |




## Mumble

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Mumble
include('simpleicons-5/M/Mumble')

' renders the element
Mumble('Mumble', 'Mumble', 'an optional tech label')
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

' loads the Item which embeds the element Mumble
include('simpleicons-5/M/Mumble')

' renders the element
Mumble('Mumble', 'Mumble', 'an optional tech label')
@enduml
```

