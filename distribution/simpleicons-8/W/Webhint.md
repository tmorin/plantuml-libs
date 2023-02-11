# Webhint


```text
simpleicons-8/W/Webhint
```

```text
include('simpleicons-8/W/Webhint')
```



| Illustration | Webhint |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/W/Webhint.png) | ![illustration for Webhint](../../simpleicons-8/W/Webhint.Local.png) |




## Webhint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Webhint
include('simpleicons-8/W/Webhint')

' renders the element
Webhint('Webhint', 'Webhint', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Webhint
include('simpleicons-8/W/Webhint')

' renders the element
Webhint('Webhint', 'Webhint', 'an optional tech label', 'an optional description')
@enduml
```

