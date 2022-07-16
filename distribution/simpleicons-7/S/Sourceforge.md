# Sourceforge


```text
simpleicons-7/S/Sourceforge
```

```text
include('simpleicons-7/S/Sourceforge')
```



| Illustration | Sourceforge |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Sourceforge.png) | ![illustration for Sourceforge](../../simpleicons-7/S/Sourceforge.Local.png) |




## Sourceforge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Sourceforge
include('simpleicons-7/S/Sourceforge')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Sourceforge
include('simpleicons-7/S/Sourceforge')

' renders the element
Sourceforge('Sourceforge', 'Sourceforge', 'an optional tech label')
@enduml
```

