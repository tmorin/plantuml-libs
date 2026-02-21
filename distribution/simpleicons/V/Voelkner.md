# Voelkner


```text
simpleicons/V/Voelkner
```

```text
include('simpleicons/V/Voelkner')
```



| Illustration | Voelkner |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/V/Voelkner.png) | ![illustration for Voelkner](../../simpleicons/V/Voelkner.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VoelknerXs>`
- `<$VoelknerSm>`
- `<$VoelknerMd>`
- `<$VoelknerLg>`





## Voelkner

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Voelkner
include('simpleicons/V/Voelkner')

' renders the element
Voelkner('Voelkner', 'Voelkner', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Voelkner
include('simpleicons/V/Voelkner')

' renders the element
Voelkner('Voelkner', 'Voelkner', 'an optional tech label', 'an optional description')
@enduml
```

