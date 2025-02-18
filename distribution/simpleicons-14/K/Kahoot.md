# Kahoot


```text
simpleicons-14/K/Kahoot
```

```text
include('simpleicons-14/K/Kahoot')
```



| Illustration | Kahoot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Kahoot.png) | ![illustration for Kahoot](../../simpleicons-14/K/Kahoot.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KahootXs>`
- `<$KahootSm>`
- `<$KahootMd>`
- `<$KahootLg>`





## Kahoot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Kahoot
include('simpleicons-14/K/Kahoot')

' renders the element
Kahoot('Kahoot', 'Kahoot', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kahoot
include('simpleicons-14/K/Kahoot')

' renders the element
Kahoot('Kahoot', 'Kahoot', 'an optional tech label', 'an optional description')
@enduml
```

