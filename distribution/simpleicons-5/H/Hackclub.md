# Hackclub


```text
simpleicons-5/H/Hackclub
```

```text
include('simpleicons-5/H/Hackclub')
```



| Illustration | Hackclub |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/Hackclub.png) | ![illustration for Hackclub](../../simpleicons-5/H/Hackclub.Local.png) |




## Hackclub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Hackclub
include('simpleicons-5/H/Hackclub')

' renders the element
Hackclub('Hackclub', 'Hackclub', 'an optional tech label')
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

' loads the Item which embeds the element Hackclub
include('simpleicons-5/H/Hackclub')

' renders the element
Hackclub('Hackclub', 'Hackclub', 'an optional tech label')
@enduml
```

