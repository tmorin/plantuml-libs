# Theirishtimes


```text
simpleicons-14/T/Theirishtimes
```

```text
include('simpleicons-14/T/Theirishtimes')
```



| Illustration | Theirishtimes |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Theirishtimes.png) | ![illustration for Theirishtimes](../../simpleicons-14/T/Theirishtimes.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TheirishtimesXs>`
- `<$TheirishtimesSm>`
- `<$TheirishtimesMd>`
- `<$TheirishtimesLg>`





## Theirishtimes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Theirishtimes
include('simpleicons-14/T/Theirishtimes')

' renders the element
Theirishtimes('Theirishtimes', 'Theirishtimes', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Theirishtimes
include('simpleicons-14/T/Theirishtimes')

' renders the element
Theirishtimes('Theirishtimes', 'Theirishtimes', 'an optional tech label', 'an optional description')
@enduml
```

