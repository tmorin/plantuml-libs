# Opencritic


```text
simpleicons/O/Opencritic
```

```text
include('simpleicons/O/Opencritic')
```



| Illustration | Opencritic |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Opencritic.png) | ![illustration for Opencritic](../../simpleicons/O/Opencritic.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpencriticXs>`
- `<$OpencriticSm>`
- `<$OpencriticMd>`
- `<$OpencriticLg>`





## Opencritic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Opencritic
include('simpleicons/O/Opencritic')

' renders the element
Opencritic('Opencritic', 'Opencritic', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Opencritic
include('simpleicons/O/Opencritic')

' renders the element
Opencritic('Opencritic', 'Opencritic', 'an optional tech label', 'an optional description')
@enduml
```

