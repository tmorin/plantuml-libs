# Evernote


```text
fontawesome-5/Brands/Evernote
```

```text
include('fontawesome-5/Brands/Evernote')
```



| Illustration | Evernote |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Evernote.png) | ![illustration for Evernote](../../fontawesome-5/Brands/Evernote.Local.png) |




## Evernote

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Evernote
include('fontawesome-5/Brands/Evernote')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Evernote
include('fontawesome-5/Brands/Evernote')

' renders the element
Evernote('Evernote', 'Evernote', 'an optional tech label')
@enduml
```

