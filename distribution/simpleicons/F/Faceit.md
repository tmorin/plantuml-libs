# Faceit


```text
simpleicons/F/Faceit
```

```text
include('simpleicons/F/Faceit')
```



| Illustration | Faceit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Faceit.png) | ![illustration for Faceit](../../simpleicons/F/Faceit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaceitXs>`
- `<$FaceitSm>`
- `<$FaceitMd>`
- `<$FaceitLg>`





## Faceit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Faceit
include('simpleicons/F/Faceit')

' renders the element
Faceit('Faceit', 'Faceit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Faceit
include('simpleicons/F/Faceit')

' renders the element
Faceit('Faceit', 'Faceit', 'an optional tech label', 'an optional description')
@enduml
```

