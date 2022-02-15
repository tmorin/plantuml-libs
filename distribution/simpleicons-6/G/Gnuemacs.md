# Gnuemacs


```text
simpleicons-6/G/Gnuemacs
```

```text
include('simpleicons-6/G/Gnuemacs')
```



| Illustration | Gnuemacs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Gnuemacs.png) | ![illustration for Gnuemacs](../../simpleicons-6/G/Gnuemacs.Local.png) |




## Gnuemacs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Gnuemacs
include('simpleicons-6/G/Gnuemacs')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Gnuemacs
include('simpleicons-6/G/Gnuemacs')

' renders the element
Gnuemacs('Gnuemacs', 'Gnuemacs', 'an optional tech label')
@enduml
```

