# Rockstargames


```text
simpleicons-14/R/Rockstargames
```

```text
include('simpleicons-14/R/Rockstargames')
```



| Illustration | Rockstargames |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Rockstargames.png) | ![illustration for Rockstargames](../../simpleicons-14/R/Rockstargames.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RockstargamesXs>`
- `<$RockstargamesSm>`
- `<$RockstargamesMd>`
- `<$RockstargamesLg>`





## Rockstargames

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Rockstargames
include('simpleicons-14/R/Rockstargames')

' renders the element
Rockstargames('Rockstargames', 'Rockstargames', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rockstargames
include('simpleicons-14/R/Rockstargames')

' renders the element
Rockstargames('Rockstargames', 'Rockstargames', 'an optional tech label', 'an optional description')
@enduml
```

