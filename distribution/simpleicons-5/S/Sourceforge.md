# Sourceforge


```text
simpleicons-5/S/Sourceforge
```

```text
include('simpleicons-5/S/Sourceforge')
```



| Illustration | Sourceforge |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Sourceforge.png) | ![illustration for Sourceforge](../../simpleicons-5/S/Sourceforge.Local.png) |




## Sourceforge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Sourceforge
include('simpleicons-5/S/Sourceforge')

' renders the element
Sourceforge('Sourceforge', 'Sourceforge', 'an optional tech label')
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

' loads the Item which embeds the element Sourceforge
include('simpleicons-5/S/Sourceforge')

' renders the element
Sourceforge('Sourceforge', 'Sourceforge', 'an optional tech label')
@enduml
```

