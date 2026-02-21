# Effect


```text
simpleicons/E/Effect
```

```text
include('simpleicons/E/Effect')
```



| Illustration | Effect |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/E/Effect.png) | ![illustration for Effect](../../simpleicons/E/Effect.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EffectXs>`
- `<$EffectSm>`
- `<$EffectMd>`
- `<$EffectLg>`





## Effect

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Effect
include('simpleicons/E/Effect')

' renders the element
Effect('Effect', 'Effect', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Effect
include('simpleicons/E/Effect')

' renders the element
Effect('Effect', 'Effect', 'an optional tech label', 'an optional description')
@enduml
```

