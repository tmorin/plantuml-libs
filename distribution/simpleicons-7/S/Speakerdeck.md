# Speakerdeck


```text
simpleicons-7/S/Speakerdeck
```

```text
include('simpleicons-7/S/Speakerdeck')
```



| Illustration | Speakerdeck |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Speakerdeck.png) | ![illustration for Speakerdeck](../../simpleicons-7/S/Speakerdeck.Local.png) |




## Speakerdeck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Speakerdeck
include('simpleicons-7/S/Speakerdeck')

' renders the element
Speakerdeck('Speakerdeck', 'Speakerdeck', 'an optional tech label')
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

' loads the Item which embeds the element Speakerdeck
include('simpleicons-7/S/Speakerdeck')

' renders the element
Speakerdeck('Speakerdeck', 'Speakerdeck', 'an optional tech label')
@enduml
```

