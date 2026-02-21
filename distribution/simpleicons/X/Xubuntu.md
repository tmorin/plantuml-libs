# Xubuntu


```text
simpleicons/X/Xubuntu
```

```text
include('simpleicons/X/Xubuntu')
```



| Illustration | Xubuntu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/X/Xubuntu.png) | ![illustration for Xubuntu](../../simpleicons/X/Xubuntu.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$XubuntuXs>`
- `<$XubuntuSm>`
- `<$XubuntuMd>`
- `<$XubuntuLg>`





## Xubuntu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Xubuntu
include('simpleicons/X/Xubuntu')

' renders the element
Xubuntu('Xubuntu', 'Xubuntu', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Xubuntu
include('simpleicons/X/Xubuntu')

' renders the element
Xubuntu('Xubuntu', 'Xubuntu', 'an optional tech label', 'an optional description')
@enduml
```

