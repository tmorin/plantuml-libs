# Suckless


```text
simpleicons-6/S/Suckless
```

```text
include('simpleicons-6/S/Suckless')
```



| Illustration | Suckless |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Suckless.png) | ![illustration for Suckless](../../simpleicons-6/S/Suckless.Local.png) |




## Suckless

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Suckless
include('simpleicons-6/S/Suckless')

' renders the element
Suckless('Suckless', 'Suckless', 'an optional tech label')
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

' loads the Item which embeds the element Suckless
include('simpleicons-6/S/Suckless')

' renders the element
Suckless('Suckless', 'Suckless', 'an optional tech label')
@enduml
```

