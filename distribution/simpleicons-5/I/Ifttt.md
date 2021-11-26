# Ifttt


```text
simpleicons-5/I/Ifttt
```

```text
include('simpleicons-5/I/Ifttt')
```



| Illustration | Ifttt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/I/Ifttt.png) | ![illustration for Ifttt](../../simpleicons-5/I/Ifttt.Local.png) |




## Ifttt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Ifttt
include('simpleicons-5/I/Ifttt')

' renders the element
Ifttt('Ifttt', 'Ifttt', 'an optional tech label')
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

' loads the Item which embeds the element Ifttt
include('simpleicons-5/I/Ifttt')

' renders the element
Ifttt('Ifttt', 'Ifttt', 'an optional tech label')
@enduml
```

