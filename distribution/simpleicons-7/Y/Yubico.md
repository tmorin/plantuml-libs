# Yubico


```text
simpleicons-7/Y/Yubico
```

```text
include('simpleicons-7/Y/Yubico')
```



| Illustration | Yubico |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/Y/Yubico.png) | ![illustration for Yubico](../../simpleicons-7/Y/Yubico.Local.png) |




## Yubico

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Yubico
include('simpleicons-7/Y/Yubico')

' renders the element
Yubico('Yubico', 'Yubico', 'an optional tech label')
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

' loads the Item which embeds the element Yubico
include('simpleicons-7/Y/Yubico')

' renders the element
Yubico('Yubico', 'Yubico', 'an optional tech label')
@enduml
```

