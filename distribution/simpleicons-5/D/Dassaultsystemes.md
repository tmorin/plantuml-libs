# Dassaultsystemes


```text
simpleicons-5/D/Dassaultsystemes
```

```text
include('simpleicons-5/D/Dassaultsystemes')
```



| Illustration | Dassaultsystemes |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Dassaultsystemes.png) | ![illustration for Dassaultsystemes](../../simpleicons-5/D/Dassaultsystemes.Local.png) |




## Dassaultsystemes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Dassaultsystemes
include('simpleicons-5/D/Dassaultsystemes')

' renders the element
Dassaultsystemes('Dassaultsystemes', 'Dassaultsystemes', 'an optional tech label')
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

' loads the Item which embeds the element Dassaultsystemes
include('simpleicons-5/D/Dassaultsystemes')

' renders the element
Dassaultsystemes('Dassaultsystemes', 'Dassaultsystemes', 'an optional tech label')
@enduml
```

