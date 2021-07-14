# Keybase


```text
simpleicons-5/K/Keybase
```

```text
include('simpleicons-5/K/Keybase')
```



| Illustration | Keybase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/K/Keybase.png) | ![illustration for Keybase](../../simpleicons-5/K/Keybase.Local.png) |




## Keybase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Keybase
include('simpleicons-5/K/Keybase')

' renders the element
Keybase('Keybase', 'Keybase', 'an optional tech label')
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

' loads the Item which embeds the element Keybase
include('simpleicons-5/K/Keybase')

' renders the element
Keybase('Keybase', 'Keybase', 'an optional tech label')
@enduml
```

