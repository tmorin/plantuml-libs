# Osmc


```text
simpleicons-6/O/Osmc
```

```text
include('simpleicons-6/O/Osmc')
```



| Illustration | Osmc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/O/Osmc.png) | ![illustration for Osmc](../../simpleicons-6/O/Osmc.Local.png) |




## Osmc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Osmc
include('simpleicons-6/O/Osmc')

' renders the element
Osmc('Osmc', 'Osmc', 'an optional tech label')
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

' loads the Item which embeds the element Osmc
include('simpleicons-6/O/Osmc')

' renders the element
Osmc('Osmc', 'Osmc', 'an optional tech label')
@enduml
```

