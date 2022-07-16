# Facebookgaming


```text
simpleicons-7/F/Facebookgaming
```

```text
include('simpleicons-7/F/Facebookgaming')
```



| Illustration | Facebookgaming |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/F/Facebookgaming.png) | ![illustration for Facebookgaming](../../simpleicons-7/F/Facebookgaming.Local.png) |




## Facebookgaming

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Facebookgaming
include('simpleicons-7/F/Facebookgaming')

' renders the element
Facebookgaming('Facebookgaming', 'Facebookgaming', 'an optional tech label')
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

' loads the Item which embeds the element Facebookgaming
include('simpleicons-7/F/Facebookgaming')

' renders the element
Facebookgaming('Facebookgaming', 'Facebookgaming', 'an optional tech label')
@enduml
```

