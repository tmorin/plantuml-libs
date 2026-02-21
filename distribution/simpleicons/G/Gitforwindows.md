# Gitforwindows


```text
simpleicons/G/Gitforwindows
```

```text
include('simpleicons/G/Gitforwindows')
```



| Illustration | Gitforwindows |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Gitforwindows.png) | ![illustration for Gitforwindows](../../simpleicons/G/Gitforwindows.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GitforwindowsXs>`
- `<$GitforwindowsSm>`
- `<$GitforwindowsMd>`
- `<$GitforwindowsLg>`





## Gitforwindows

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gitforwindows
include('simpleicons/G/Gitforwindows')

' renders the element
Gitforwindows('Gitforwindows', 'Gitforwindows', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gitforwindows
include('simpleicons/G/Gitforwindows')

' renders the element
Gitforwindows('Gitforwindows', 'Gitforwindows', 'an optional tech label', 'an optional description')
@enduml
```

