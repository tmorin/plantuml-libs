# Gnuemacs


```text
simpleicons-5/G/Gnuemacs
```

```text
include('simpleicons-5/G/Gnuemacs')
```



| Illustration | Gnuemacs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Gnuemacs.png) | ![illustration for Gnuemacs](../../simpleicons-5/G/Gnuemacs.Local.png) |




## Gnuemacs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Gnuemacs
include('simpleicons-5/G/Gnuemacs')

' renders the element
Gnuemacs('Gnuemacs', 'Gnuemacs', 'an optional tech label')
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

' loads the Item which embeds the element Gnuemacs
include('simpleicons-5/G/Gnuemacs')

' renders the element
Gnuemacs('Gnuemacs', 'Gnuemacs', 'an optional tech label')
@enduml
```

