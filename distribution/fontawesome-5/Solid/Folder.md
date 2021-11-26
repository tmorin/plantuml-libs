# Folder


```text
fontawesome-5/Solid/Folder
```

```text
include('fontawesome-5/Solid/Folder')
```



| Illustration | Folder |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Folder.png) | ![illustration for Folder](../../fontawesome-5/Solid/Folder.Local.png) |




## Folder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Folder
include('fontawesome-5/Solid/Folder')

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
include('fontawesome-5/Solid/Folder')

' renders the element
Folder('Folder', 'Folder', 'an optional tech label')
@enduml
```

