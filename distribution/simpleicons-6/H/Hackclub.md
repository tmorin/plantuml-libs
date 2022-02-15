# Hackclub


```text
simpleicons-6/H/Hackclub
```

```text
include('simpleicons-6/H/Hackclub')
```



| Illustration | Hackclub |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/H/Hackclub.png) | ![illustration for Hackclub](../../simpleicons-6/H/Hackclub.Local.png) |




## Hackclub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Hackclub
include('simpleicons-6/H/Hackclub')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Hackclub
include('simpleicons-6/H/Hackclub')

' renders the element
Hackclub('Hackclub', 'Hackclub', 'an optional tech label')
@enduml
```

