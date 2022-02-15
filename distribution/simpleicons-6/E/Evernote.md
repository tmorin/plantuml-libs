# Evernote


```text
simpleicons-6/E/Evernote
```

```text
include('simpleicons-6/E/Evernote')
```



| Illustration | Evernote |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/E/Evernote.png) | ![illustration for Evernote](../../simpleicons-6/E/Evernote.Local.png) |




## Evernote

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Evernote
include('simpleicons-6/E/Evernote')

' renders the element
Evernote('Evernote', 'Evernote', 'an optional tech label')
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

' loads the Item which embeds the element Evernote
include('simpleicons-6/E/Evernote')

' renders the element
Evernote('Evernote', 'Evernote', 'an optional tech label')
@enduml
```

