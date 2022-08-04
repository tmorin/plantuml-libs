# Ifttt


```text
simpleicons-7/I/Ifttt
```

```text
include('simpleicons-7/I/Ifttt')
```



| Illustration | Ifttt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/I/Ifttt.png) | ![illustration for Ifttt](../../simpleicons-7/I/Ifttt.Local.png) |




## Ifttt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Ifttt
include('simpleicons-7/I/Ifttt')

' renders the element
Ifttt('Ifttt', 'Ifttt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ifttt
include('simpleicons-7/I/Ifttt')

' renders the element
Ifttt('Ifttt', 'Ifttt', 'an optional tech label', 'an optional description')
@enduml
```

