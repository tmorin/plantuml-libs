# Folder


```text
fontawesome-5/Regular/Folder
```

```text
include('fontawesome-5/Regular/Folder')
```



| Illustration | Folder |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/Folder.png) | ![illustration for Folder](../../fontawesome-5/Regular/Folder.Local.png) |




## Folder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Folder
include('fontawesome-5/Regular/Folder')

' renders the element
Folder('Folder', 'Folder', 'an optional tech label')
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

' loads the Item which embeds the element Folder
include('fontawesome-5/Regular/Folder')

' renders the element
Folder('Folder', 'Folder', 'an optional tech label')
@enduml
```

