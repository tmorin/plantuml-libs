# Effect


```text
simpleicons-14/E/Effect
```

```text
include('simpleicons-14/E/Effect')
```



| Illustration | Effect |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Effect.png) | ![illustration for Effect](../../simpleicons-14/E/Effect.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Effect
include('simpleicons-14/E/Effect')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Effect
include('simpleicons-14/E/Effect')

' renders the element
Effect('Effect', 'Effect', 'an optional tech label', 'an optional description')
@enduml
```

