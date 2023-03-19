# Jamboard


```text
simpleicons-8/J/Jamboard
```

```text
include('simpleicons-8/J/Jamboard')
```



| Illustration | Jamboard |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/J/Jamboard.png) | ![illustration for Jamboard](../../simpleicons-8/J/Jamboard.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JamboardXs>`
- `<$JamboardSm>`
- `<$JamboardMd>`
- `<$JamboardLg>`





## Jamboard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Jamboard
include('simpleicons-8/J/Jamboard')

' renders the element
Jamboard('Jamboard', 'Jamboard', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Jamboard
include('simpleicons-8/J/Jamboard')

' renders the element
Jamboard('Jamboard', 'Jamboard', 'an optional tech label', 'an optional description')
@enduml
```

