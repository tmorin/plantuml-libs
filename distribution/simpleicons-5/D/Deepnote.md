# Deepnote


```text
simpleicons-5/D/Deepnote
```

```text
include('simpleicons-5/D/Deepnote')
```



| Illustration | Deepnote |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Deepnote.png) | ![illustration for Deepnote](../../simpleicons-5/D/Deepnote.Local.png) |




## Deepnote

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Deepnote
include('simpleicons-5/D/Deepnote')

' renders the element
Deepnote('Deepnote', 'Deepnote', 'an optional tech label')
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

' loads the Item which embeds the element Deepnote
include('simpleicons-5/D/Deepnote')

' renders the element
Deepnote('Deepnote', 'Deepnote', 'an optional tech label')
@enduml
```

