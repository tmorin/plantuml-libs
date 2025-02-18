# Dlib


```text
simpleicons-14/D/Dlib
```

```text
include('simpleicons-14/D/Dlib')
```



| Illustration | Dlib |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Dlib.png) | ![illustration for Dlib](../../simpleicons-14/D/Dlib.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DlibXs>`
- `<$DlibSm>`
- `<$DlibMd>`
- `<$DlibLg>`





## Dlib

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Dlib
include('simpleicons-14/D/Dlib')

' renders the element
Dlib('Dlib', 'Dlib', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dlib
include('simpleicons-14/D/Dlib')

' renders the element
Dlib('Dlib', 'Dlib', 'an optional tech label', 'an optional description')
@enduml
```

