# Aftership


```text
simpleicons-14/A/Aftership
```

```text
include('simpleicons-14/A/Aftership')
```



| Illustration | Aftership |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Aftership.png) | ![illustration for Aftership](../../simpleicons-14/A/Aftership.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AftershipXs>`
- `<$AftershipSm>`
- `<$AftershipMd>`
- `<$AftershipLg>`





## Aftership

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Aftership
include('simpleicons-14/A/Aftership')

' renders the element
Aftership('Aftership', 'Aftership', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Aftership
include('simpleicons-14/A/Aftership')

' renders the element
Aftership('Aftership', 'Aftership', 'an optional tech label', 'an optional description')
@enduml
```

