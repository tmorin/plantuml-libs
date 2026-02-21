# Conventionalcommits


```text
simpleicons/C/Conventionalcommits
```

```text
include('simpleicons/C/Conventionalcommits')
```



| Illustration | Conventionalcommits |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Conventionalcommits.png) | ![illustration for Conventionalcommits](../../simpleicons/C/Conventionalcommits.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ConventionalcommitsXs>`
- `<$ConventionalcommitsSm>`
- `<$ConventionalcommitsMd>`
- `<$ConventionalcommitsLg>`





## Conventionalcommits

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Conventionalcommits
include('simpleicons/C/Conventionalcommits')

' renders the element
Conventionalcommits('Conventionalcommits', 'Conventionalcommits', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Conventionalcommits
include('simpleicons/C/Conventionalcommits')

' renders the element
Conventionalcommits('Conventionalcommits', 'Conventionalcommits', 'an optional tech label', 'an optional description')
@enduml
```

