# Teamviewer


```text
simpleicons-5/T/Teamviewer
```

```text
include('simpleicons-5/T/Teamviewer')
```



| Illustration | Teamviewer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Teamviewer.png) | ![illustration for Teamviewer](../../simpleicons-5/T/Teamviewer.Local.png) |




## Teamviewer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Teamviewer
include('simpleicons-5/T/Teamviewer')

' renders the element
Teamviewer('Teamviewer', 'Teamviewer', 'an optional tech label')
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

' loads the Item which embeds the element Teamviewer
include('simpleicons-5/T/Teamviewer')

' renders the element
Teamviewer('Teamviewer', 'Teamviewer', 'an optional tech label')
@enduml
```

