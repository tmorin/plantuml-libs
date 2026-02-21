# Opencritic


```text
simpleicons-14/O/Opencritic
```

```text
include('simpleicons-14/O/Opencritic')
```



| Illustration | Opencritic |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Opencritic.png) | ![illustration for Opencritic](../../simpleicons-14/O/Opencritic.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Opencritic
include('simpleicons-14/O/Opencritic')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Opencritic
include('simpleicons-14/O/Opencritic')

' renders the element
Opencritic('Opencritic', 'Opencritic', 'an optional tech label', 'an optional description')
@enduml
```

