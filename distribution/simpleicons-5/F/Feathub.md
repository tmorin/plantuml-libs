# Feathub


```text
simpleicons-5/F/Feathub
```

```text
include('simpleicons-5/F/Feathub')
```



| Illustration | Feathub |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Feathub.png) | ![illustration for Feathub](../../simpleicons-5/F/Feathub.Local.png) |




## Feathub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Feathub
include('simpleicons-5/F/Feathub')

' renders the element
Feathub('Feathub', 'Feathub', 'an optional tech label')
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

' loads the Item which embeds the element Feathub
include('simpleicons-5/F/Feathub')

' renders the element
Feathub('Feathub', 'Feathub', 'an optional tech label')
@enduml
```

