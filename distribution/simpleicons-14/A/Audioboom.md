# Audioboom


```text
simpleicons-14/A/Audioboom
```

```text
include('simpleicons-14/A/Audioboom')
```



| Illustration | Audioboom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Audioboom.png) | ![illustration for Audioboom](../../simpleicons-14/A/Audioboom.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AudioboomXs>`
- `<$AudioboomSm>`
- `<$AudioboomMd>`
- `<$AudioboomLg>`





## Audioboom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Audioboom
include('simpleicons-14/A/Audioboom')

' renders the element
Audioboom('Audioboom', 'Audioboom', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Audioboom
include('simpleicons-14/A/Audioboom')

' renders the element
Audioboom('Audioboom', 'Audioboom', 'an optional tech label', 'an optional description')
@enduml
```

