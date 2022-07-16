# Dlib


```text
simpleicons-7/D/Dlib
```

```text
include('simpleicons-7/D/Dlib')
```



| Illustration | Dlib |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/D/Dlib.png) | ![illustration for Dlib](../../simpleicons-7/D/Dlib.Local.png) |




## Dlib

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Dlib
include('simpleicons-7/D/Dlib')

' renders the element
Dlib('Dlib', 'Dlib', 'an optional tech label')
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

' loads the Item which embeds the element Dlib
include('simpleicons-7/D/Dlib')

' renders the element
Dlib('Dlib', 'Dlib', 'an optional tech label')
@enduml
```

