# Curseforge


```text
simpleicons-5/C/Curseforge
```

```text
include('simpleicons-5/C/Curseforge')
```



| Illustration | Curseforge |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Curseforge.png) | ![illustration for Curseforge](../../simpleicons-5/C/Curseforge.Local.png) |




## Curseforge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Curseforge
include('simpleicons-5/C/Curseforge')

' renders the element
Curseforge('Curseforge', 'Curseforge', 'an optional tech label')
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

' loads the Item which embeds the element Curseforge
include('simpleicons-5/C/Curseforge')

' renders the element
Curseforge('Curseforge', 'Curseforge', 'an optional tech label')
@enduml
```

