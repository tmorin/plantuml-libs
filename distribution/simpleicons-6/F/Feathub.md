# Feathub


```text
simpleicons-6/F/Feathub
```

```text
include('simpleicons-6/F/Feathub')
```



| Illustration | Feathub |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/F/Feathub.png) | ![illustration for Feathub](../../simpleicons-6/F/Feathub.Local.png) |




## Feathub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Feathub
include('simpleicons-6/F/Feathub')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Feathub
include('simpleicons-6/F/Feathub')

' renders the element
Feathub('Feathub', 'Feathub', 'an optional tech label')
@enduml
```

