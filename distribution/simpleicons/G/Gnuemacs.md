# Gnuemacs


```text
simpleicons/G/Gnuemacs
```

```text
include('simpleicons/G/Gnuemacs')
```



| Illustration | Gnuemacs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Gnuemacs.png) | ![illustration for Gnuemacs](../../simpleicons/G/Gnuemacs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GnuemacsXs>`
- `<$GnuemacsSm>`
- `<$GnuemacsMd>`
- `<$GnuemacsLg>`





## Gnuemacs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gnuemacs
include('simpleicons/G/Gnuemacs')

' renders the element
Gnuemacs('Gnuemacs', 'Gnuemacs', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gnuemacs
include('simpleicons/G/Gnuemacs')

' renders the element
Gnuemacs('Gnuemacs', 'Gnuemacs', 'an optional tech label', 'an optional description')
@enduml
```

