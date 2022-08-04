# Teamviewer


```text
simpleicons-7/T/Teamviewer
```

```text
include('simpleicons-7/T/Teamviewer')
```



| Illustration | Teamviewer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Teamviewer.png) | ![illustration for Teamviewer](../../simpleicons-7/T/Teamviewer.Local.png) |




## Teamviewer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Teamviewer
include('simpleicons-7/T/Teamviewer')

' renders the element
Teamviewer('Teamviewer', 'Teamviewer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Teamviewer
include('simpleicons-7/T/Teamviewer')

' renders the element
Teamviewer('Teamviewer', 'Teamviewer', 'an optional tech label', 'an optional description')
@enduml
```

