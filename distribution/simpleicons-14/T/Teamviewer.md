# Teamviewer


```text
simpleicons-14/T/Teamviewer
```

```text
include('simpleicons-14/T/Teamviewer')
```



| Illustration | Teamviewer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Teamviewer.png) | ![illustration for Teamviewer](../../simpleicons-14/T/Teamviewer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TeamviewerXs>`
- `<$TeamviewerSm>`
- `<$TeamviewerMd>`
- `<$TeamviewerLg>`





## Teamviewer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Teamviewer
include('simpleicons-14/T/Teamviewer')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Teamviewer
include('simpleicons-14/T/Teamviewer')

' renders the element
Teamviewer('Teamviewer', 'Teamviewer', 'an optional tech label', 'an optional description')
@enduml
```

