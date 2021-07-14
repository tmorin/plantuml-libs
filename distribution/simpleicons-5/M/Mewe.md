# Mewe


```text
simpleicons-5/M/Mewe
```

```text
include('simpleicons-5/M/Mewe')
```



| Illustration | Mewe |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Mewe.png) | ![illustration for Mewe](../../simpleicons-5/M/Mewe.Local.png) |




## Mewe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Mewe
include('simpleicons-5/M/Mewe')

' renders the element
Mewe('Mewe', 'Mewe', 'an optional tech label')
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

' loads the Item which embeds the element Mewe
include('simpleicons-5/M/Mewe')

' renders the element
Mewe('Mewe', 'Mewe', 'an optional tech label')
@enduml
```

