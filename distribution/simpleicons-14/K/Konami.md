# Konami


```text
simpleicons-14/K/Konami
```

```text
include('simpleicons-14/K/Konami')
```



| Illustration | Konami |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Konami.png) | ![illustration for Konami](../../simpleicons-14/K/Konami.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KonamiXs>`
- `<$KonamiSm>`
- `<$KonamiMd>`
- `<$KonamiLg>`





## Konami

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Konami
include('simpleicons-14/K/Konami')

' renders the element
Konami('Konami', 'Konami', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Konami
include('simpleicons-14/K/Konami')

' renders the element
Konami('Konami', 'Konami', 'an optional tech label', 'an optional description')
@enduml
```

