# Interactjs


```text
simpleicons-5/I/Interactjs
```

```text
include('simpleicons-5/I/Interactjs')
```



| Illustration | Interactjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/I/Interactjs.png) | ![illustration for Interactjs](../../simpleicons-5/I/Interactjs.Local.png) |




## Interactjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Interactjs
include('simpleicons-5/I/Interactjs')

' renders the element
Interactjs('Interactjs', 'Interactjs', 'an optional tech label')
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

' loads the Item which embeds the element Interactjs
include('simpleicons-5/I/Interactjs')

' renders the element
Interactjs('Interactjs', 'Interactjs', 'an optional tech label')
@enduml
```

