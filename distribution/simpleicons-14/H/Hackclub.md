# Hackclub


```text
simpleicons-14/H/Hackclub
```

```text
include('simpleicons-14/H/Hackclub')
```



| Illustration | Hackclub |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Hackclub.png) | ![illustration for Hackclub](../../simpleicons-14/H/Hackclub.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HackclubXs>`
- `<$HackclubSm>`
- `<$HackclubMd>`
- `<$HackclubLg>`





## Hackclub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Hackclub
include('simpleicons-14/H/Hackclub')

' renders the element
Hackclub('Hackclub', 'Hackclub', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hackclub
include('simpleicons-14/H/Hackclub')

' renders the element
Hackclub('Hackclub', 'Hackclub', 'an optional tech label', 'an optional description')
@enduml
```

