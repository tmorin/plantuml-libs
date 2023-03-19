# Dassaultsystemes


```text
simpleicons-8/D/Dassaultsystemes
```

```text
include('simpleicons-8/D/Dassaultsystemes')
```



| Illustration | Dassaultsystemes |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/D/Dassaultsystemes.png) | ![illustration for Dassaultsystemes](../../simpleicons-8/D/Dassaultsystemes.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DassaultsystemesXs>`
- `<$DassaultsystemesSm>`
- `<$DassaultsystemesMd>`
- `<$DassaultsystemesLg>`





## Dassaultsystemes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Dassaultsystemes
include('simpleicons-8/D/Dassaultsystemes')

' renders the element
Dassaultsystemes('Dassaultsystemes', 'Dassaultsystemes', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Dassaultsystemes
include('simpleicons-8/D/Dassaultsystemes')

' renders the element
Dassaultsystemes('Dassaultsystemes', 'Dassaultsystemes', 'an optional tech label', 'an optional description')
@enduml
```

