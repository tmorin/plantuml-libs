# Penpot


```text
simpleicons-7/P/Penpot
```

```text
include('simpleicons-7/P/Penpot')
```



| Illustration | Penpot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Penpot.png) | ![illustration for Penpot](../../simpleicons-7/P/Penpot.Local.png) |




## Penpot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Penpot
include('simpleicons-7/P/Penpot')

' renders the element
Penpot('Penpot', 'Penpot', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Penpot
include('simpleicons-7/P/Penpot')

' renders the element
Penpot('Penpot', 'Penpot', 'an optional tech label', 'an optional description')
@enduml
```

