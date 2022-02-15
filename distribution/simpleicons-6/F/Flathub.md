# Flathub


```text
simpleicons-6/F/Flathub
```

```text
include('simpleicons-6/F/Flathub')
```



| Illustration | Flathub |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/F/Flathub.png) | ![illustration for Flathub](../../simpleicons-6/F/Flathub.Local.png) |




## Flathub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Flathub
include('simpleicons-6/F/Flathub')

' renders the element
Flathub('Flathub', 'Flathub', 'an optional tech label')
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

' loads the Item which embeds the element Flathub
include('simpleicons-6/F/Flathub')

' renders the element
Flathub('Flathub', 'Flathub', 'an optional tech label')
@enduml
```

